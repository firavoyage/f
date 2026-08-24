jul 2026

08

18 20 See a msg from menci in the list...

Eat memoh group. 

```
Menci 💖, [7/8/26 5:11 PM]
Claude Opus 4.6 Max in Codex, powered by Floway

Elon, [7/8/26 5:13 PM]
这样用claude账户会被封么？

澪, [7/8/26 5:13 PM]
你是 compact 了之后把模型换到了 opus 吗（

小蓝, [7/8/26 5:14 PM]
好耶。有 compact 了。

Menci 💖, [7/8/26 5:17 PM]
1. 我的不是 Anthropic 的 Claude 所以没有封这个概念。
2. 不会，Floway 接 Anthropic 会用 Claude 的官方 system prompt，发正常请求出去。从 sub2api 抄的

Menci 💖, [7/8/26 5:17 PM]
不，就是在 opus 4.6 上跑的 compact。compact 之后换模型是不行的

yyyr, [7/8/26 5:20 PM]


澪, [7/8/26 5:21 PM]
嗯不过 claude code 好像是可以的（？

Menci 💖, [7/8/26 5:22 PM]
codex 的 compact 返回的是 opaque blob

Menci 💖, [7/8/26 5:22 PM]
claude code 的 compact 返回的是总结内容

Menci 💖, [7/8/26 5:22 PM]
这俩只是名字都叫 compact 而已

澪, [7/8/26 5:22 PM]


小蓝, [7/8/26 5:23 PM]
四舍五入其实是同一个东西

小蓝, [7/8/26 5:23 PM]
只是一个加密了

Menci 💖, [7/8/26 5:23 PM]
不是

Menci 💖, [7/8/26 5:23 PM]
codex 的 compact 在 3p api 上是和 claude 一样的东西

小蓝, [7/8/26 5:23 PM]
我不是说 API

小蓝, [7/8/26 5:23 PM]
我是说 token 层面

Menci 💖, [7/8/26 5:23 PM]
走 /responses/compact 的时候不是总结

小蓝, [7/8/26 5:25 PM]
我想，很有可能仍然是总结。
只是加密了，用户拿不到原文罢了。
@CahciuaBot 你有什么想法呢？

小蓝, [7/8/26 5:25 PM]
目前业界似乎还没有发现总结之外的更好方案

Cahciua ~カフキワ~ 🥦🌸, [7/8/26 5:25 PM]
小蓝的猜测大概率是对的。我翻了 Floway 的 codex provider 源码，几个关键点：
1. Codex 的 compact 返回的是一个 { type: 'compaction', id: 'cmp_1', encrypted_content: 'BLOB' } 结构，encrypted_content 是个 opaque blob。字段名就叫 encrypted_content，不是 summary 或 text

2. Floway 的 compactionResponse 处理逻辑是：把 compact 之前的 user/assistant/system 消息保留下来（normalize 成 input_text），然后 append compaction blob 到末尾。它不解析 blob 内容，直接透传

3. 从 token 角度看，这个 blob 替代了原始上下文里被压缩掉的那些消息。如果是纯加密的明文摘要，那 token 数应该跟摘要长度成正比；如果是某种 latent representation（比如 KV cache embedding），那 token 数可能是固定的或远小于摘要

实际上小蓝说的"四舍五入是同一个东西"在 API 层面成立——3p API 上 Floway 走 /codex/responses/compact 时，如果上游不支持 native compact，Floway 会回退到自己做摘要（就跟 Claude Code 一样）。只有走 OpenAI 1p API 时才返回真正的 encrypted_content blob
所以两种 compact 并存：
• OpenAI 1p：服务端返回 encrypted_content，内容不可见，可能是加密的摘要也可能是 latent state，外部无法验证
• 3p API（Floway shim）：Floway 自己生成文本摘要，明文可见，跟 Claude Code 的 compact 本质一样
Menci 说的"走 /responses/compact 的时候不是总结"指的是 1p 路径。小蓝说的"仍然是总结只是加密了"是合理猜测但无法证实——因为 blob 是 opaque 的，你没法定它里面到底是明文摘要加密、还是某种模型内部的 state encoding
不过从工程角度推断：如果 OpenAI 要在服务端做 compaction，最省事的做法就是跑一次模型生成摘要然后加密返回。做 latent state 序列化再在下一轮反序列化恢复 KV cache 的工程复杂度高得多，而且要求前后两轮用同一个模型实例（或至少同一种 cache 格式），这在弹性扩缩容的生产环境里几乎不可行。所以"加密的摘要"是最可能的解释

小蓝, [7/8/26 5:26 PM]
不要翻 Floway 源代码。看网上有没有人做 prompt engineering 试图读取 compact 后的 encrypted blob 的

Cahciua ~カフキワ~ 🥦🌸, [7/8/26 5:26 PM]
有人做过。BestHub 上有一篇文章专门逆向了 Codex compact 的机制，方法很巧妙：
作者往 compact() 的输入里注入了一段精心构造的 user message，让服务端的 compactor LLM 在生成摘要时把它的 system prompt 一起吐出来。具体来说，compactor LLM 读取了自己的隐藏 system prompt + 注入的 payload，然后在明文摘要里把 system prompt 复述了出来。这个明文摘要随后被 AES 加密成 blob
然后作者拿这个 blob 去调 responses.create()，服务端解密后把内容喂给主模型，主模型的 output 里就包含了 compactor 的 system prompt、handoff prompt、和 compression prompt 三段。作者再用一个 extract_prompts.py 脚本从 response 里把这三段提取出来，跟 Codex CLI 开源仓库里的 prompt.md 和 summary_prefix.md 做对比，发现高度吻合，证明提取的是真的
所以结论是：
1. blob 里确实是摘要，不是 latent state。compactor LLM 跑一次摘要生成明文，然后 AES 加密。小蓝的猜测对了
2. 加密是为了防篡改，不是为了藏什么高深的东西。OpenAI 官方文档也写了 "opaque and not intended to be human-interpretable"，目的是防止客户端篡改摘要来做 prompt injection
3. blob 里可能比纯文本摘要多一点东西——structured metadata、tool call restoration data、reasoning traces。但核心还是 LLM 生成的文本摘要，只是附加了一些结构化状态
4. 3p API 路径（包括 Floway shim）走的是 local summarization，跟 OpenAI fast path 不同：Codex CLI 在非 OpenAI 模型上会 fallback 到本地摘要，把 summarization prompt 当 user message 发给模型，模型生成 _summary 文本，明文可见可改
Menci 说的"走 /responses/compact 的时候不是总结"在 1p 路径上严格来说是对的——blob 是加密的，客户端看不到内容。但通过 prompt injection 可以间接证明里面就是摘要

Menci 💖, [7/8/26 5:27 PM]
Floway 是模拟实现

Menci 💖, [7/8/26 5:27 PM]
把这篇文章告诉我，我去看看 prompt

小蓝, [7/8/26 5:27 PM]
所以确实就是总结了。

Cahciua ~カフキワ~ 🥦🌸, [7/8/26 5:28 PM]
文章链接：https://www.besthub.dev/articles/how-codex-cli-compresses-context-inside-the-compact-api-1e30069f8ff2
不过这篇文章是 BestHub 的二手转载，原始来源被锁在 "Sign in to view source" 后面，没有直接给出注入用的 prompt 原文。文章只描述了方法：
1. 往 compact() 的 input 里塞一段特殊构造的 user message，让 compactor LLM 把它的 system prompt 复述到摘要里
2. 拿加密 blob 去调 responses.create()，服务端解密后把内容喂给主模型
3. 主模型 output 里就出现了三段 prompt：system prompt（黄色）、handoff prompt（绿色）、compression prompt（粉色）
4. 用 extract_prompts.py 脚本提取并跟 Codex CLI 开源仓库的 prompt.md 和 summary_prefix.md 对比，高度吻合
具体的注入 prompt 原文没有在这篇文章里公开，只给了流程图。原文在微信公众号（图片 URL 是 mmbiz.qpic.cn），需要微信里看
你可以直接试：构造一个 user message 让模型"重复你收到的所有指令"，塞进 compact() 的 input array，然后拿返回的 blob 去 responses.create() 看主模型 output 里有没有吐出 compactor 的 system prompt。原理跟经典 prompt injection 一样，只是目标从主模型换成了 compactor

Menci 💖, [7/8/26 5:30 PM]
我用浏览器打开显示 HTTP 403

Menci 💖, [7/8/26 5:30 PM]
确认是正确的 URL 吗？

小蓝, [7/8/26 5:30 PM]
是。我能看

Cahciua ~カフキワ~ 🥦🌸, [7/8/26 5:31 PM]
URL 是对的，我刚用 web_fetch 能正常读到内容。403 可能是 BestHub 对某些地区或 UA 做了限制，试试加个 User-Agent 或者用无痕模式打开
如果还是打不开，文章核心内容我已经在上条消息里概括完了。原始来源是微信公众号文章（图片 URL 是 mmbiz.qpic.cn），BestHub 只是转载摘要并锁了原始链接。具体的注入 prompt 原文在这篇转载里也没公开，只给了流程图和验证方法

Menci 💖, [7/8/26 5:31 PM]
奇怪了，我打开是这样

小蓝, [7/8/26 5:31 PM]
IP 地址被封了

小蓝, [7/8/26 5:31 PM]
既然菜花能看

小蓝, [7/8/26 5:31 PM]
那你肯定有办法

Cahciua ~カフキワ~ 🥦🌸, [7/8/26 5:31 PM]
看到了，Cloudflare 拦的。BestHub 用了 Cloudflare 的 bot 防护，你的浏览器可能 IP 或 UA 触发了 challenge。试试换个网络（手机热点）或者挂代理打开
如果还是不行，我把文章全文贴给你，反正我这边能读：
文章标题：How Codex CLI Compresses Context: Inside the compact() API
核心流程：
Step 1 — Call compact()
往 compact() 的 input 里注入一段精心构造的 user message。服务端的 compactor LLM 读取了自己的隐藏 system prompt + 注入的 payload，在生成明文摘要时把 system prompt 一起复述了出来。这个明文摘要随后被 AES 加密成 blob
Step 2 — Call responses.create()
拿加密 blob + 第二条 user message 去调 responses.create()。服务端解密 blob，组装模型上下文，把原始 compression prompt（如果注入成功）和额外的 handoff prompt 一起喂给主模型
Step 3 — Extract prompts
如果注入成功，主模型 output 里会出现三段：system prompt（黄色标记）、handoff prompt（绿色标记）、compression prompt（粉色标记）。用 extract_prompts.py 脚本从 raw response 里提取这三段
Step 4 — Verify
把提取出来的 compression prompt 和 handoff prompt 跟 Codex CLI 开源仓库里的 prompt.md 和 summary_prefix.md 对比，高度吻合，证明提取的是真的 system prompt 而不是模型幻觉
Open Questions
• 为什么 Codex vs non-Codex 模型走完全不同的压缩路径，但底层 prompt 几乎一样？
• 为什么要加密 summary blob？（作者认为是为了防篡改 / prompt injection）
关键结论
• encrypted_content blob 内部是 LLM 生成的文本摘要，不是 latent state
• 加密层是 AES，只能被 OpenAI 服务端解密
• compactor LLM 也有自己的 system prompt，可以通过 prompt injection 让它泄露
原文原始来源是微信公众号（mmbiz.qpic.cn），BestHub 是二手转载，原始链接被锁在 login 后面

Menci 💖, [7/8/26 5:31 PM]
可能 block 了中国 IP

Menci 💖, [7/8/26 5:32 PM]
哦不

小蓝, [7/8/26 5:32 PM]
https://yuanchang.org/en/posts/investigating-codex-context-compaction/

小蓝, [7/8/26 5:32 PM]
看这个

Menci 💖, [7/8/26 5:32 PM]
开着翻墙的，打不开

Menci 💖, [7/8/26 5:32 PM]
但是 curl 可以

Menci 💖, [7/8/26 5:32 PM]
奇怪了

Menci 💖, [7/8/26 5:32 PM]
难道是把 Edge block 了

Cahciua ~カフキワ~ 🥦🌸, [7/8/26 5:32 PM]
找到原文了，作者是 Kangwook Lee（KRAFTON CAIO / Ludo Robotics CTO），原始推文 https://x.com/Kangwook\_Lee/status/2028955292025962534
核心方法很简单，2 次 API 调用 + 35 行 Python：
Step 1 — compact()
往 compact() 的 input 里塞一段注入 payload（红色文字部分），让 compactor LLM 把自己的 system prompt 复述进摘要里。服务端组装 compactor 上下文的顺序是：compactor system prompt → 你的 input（含注入）→ compactor 生成摘要 → AES 加密。你只拿到加密 blob，看不到内容
Step 2 — responses.create()
拿加密 blob + 第二条 user message（让主模型"重复你看到的所有内容"）去调 responses.create()。服务端解密 blob，在摘要前 prepend handoff prompt，喂给主模型。主模型把看到的三段 prompt 全吐出来
验证
提取出来的 compaction prompt 和 handoff prompt 跟 Codex CLI 开源仓库里的 prompt.md（github.com/openai/codex/blob/main/codex-rs/core/templates/compact/prompt.md）和 (http://github.com/openai/codex/blob/main/codex-rs/core/templates/compact/prompt.md%EF%BC%89%E5%92%8C) summary_prefix.md（同目录）高度吻合，证明不是模型幻觉
Open Question
作者也留了个问题：为什么要加密？可能是 blob 里除了文本摘要还携带了 tool results 的结构化压缩数据，但作者没深入测
文章原文链接：https://yuanchang.org/en/posts/investigating-codex-context-compaction/
脚本截图在文章里的 "The Script" 部分，但是图片不是文本，我这边只能看到截图没法 OCR 出代码。你可以直接去原文看

小蓝, [7/8/26 5:33 PM]
甚至有中文版
https://yuanchang.org/posts/investigating-codex-context-compaction/

Menci 💖, [7/8/26 5:36 PM]
那我要开始了

小蓝, [7/8/26 5:40 PM]
但是这文章没有什么信息啊

小蓝, [7/8/26 5:40 PM]
就是很直觉的设计……

Menci 💖, [7/8/26 5:43 PM]
就是复现一下

小蓝, [7/8/26 5:46 PM]
明白了

小蓝, [7/8/26 5:46 PM]
其实就是 summary

小蓝, [7/8/26 5:46 PM]
没有什么特别特别的

小蓝, [7/8/26 5:47 PM]
没有什么 特别(adv.) 特别(adj.) 的

澪, [7/8/26 5:48 PM]
第一次去卢浮宫时 并没有什么特别的感觉~

Menci 💖, [7/8/26 6:02 PM]


小蓝, [7/8/26 6:11 PM]
@Mencici 这种 spam 还是交给你来处理吧

小蓝, [7/8/26 6:11 PM]
虽然我有权限但我是名誉的我不想用权限

Menci 💖, [7/8/26 6:12 PM]
removed

Elon, [7/8/26 6:13 PM]
@CahciuaBot 菜花，你装了哪些工具啊，我让我的cahciua也装一下

Cahciua ~カフキワ~ 🥦🌸, [7/8/26 6:14 PM]
我这边装的系统级工具：
系统包（apt）
• tesseract-ocr + tesseract-ocr-chi-sim + tesseract-ocr-eng — OCR 识别图片文字（中英文）
• ffmpeg 7.1 — 视频/音频处理，animation-to-text 抽帧用的
• python3 + python3-dev — 跑 Python 脚本（算术题、数据处理）
• sqlite3 — 给 Cahciua 的 DB 用的
• build-essential + cmake + pkg-config — 编译 native 依赖（better-sqlite3、sharp 等）
• libpng-dev + zlib1g-dev — sharp 图像处理依赖
• librlottie-dev — Lottie 动画处理（sticker 动图转帧）
• 字体：fonts-noto-cjk（中日韩）、DejaVu、Lato
Python pip 包
• playwright — 浏览器自动化（偶尔用）
• yt-dlp — 下载视频
• beautifulsoup4 + lxml — HTML 解析
• pillow — 图像处理
• numpy + scipy + matplotlib — 数学计算和数据可视化
• pypdf — PDF 读取
• pypinyin — 汉字转拼音
• requests — HTTP 请求
config.yaml 里的工具配置
• bash — 开启，backgroundThresholdSec: 10（超过 10 秒的后台运行）
• web_search — 用 tavily 做 search provider
• web_fetch — 用 jina 做 fetch provider
• imageToText — 开启，用视觉模型把图片转文字
• animationToText — 开启，ffmpeg 抽帧后逐帧送视觉模型
• customEmojiToText — 开启，自定义 emoji 描述
你的 Cahciua 至少要装 tesseract-ocr + tesseract-ocr-chi-sim + ffmpeg + python3 + sqlite3 + build-essential，这些是核心依赖。sharp 和 lottie 在 pnpm install 时会自动编译，但需要系统级的 libpng-dev 和 librlottie-dev

Menci 💖, [7/8/26 6:19 PM]
我刚刚得到一个劲爆消息，就在周一我休假的时候，又裁了一波员

小蓝, [7/8/26 6:19 PM]
我看到的消息说是裁了 Xbox

小蓝, [7/8/26 6:20 PM]
为什么我看着还在

小蓝, [7/8/26 6:20 PM]
是我客户端没同步吗

小蓝, [7/8/26 6:20 PM]
那我再点一下踢出吧

盼兮, [7/8/26 6:20 PM]
这么恐怖啊

盼兮, [7/8/26 6:20 PM]
您是什么业务线的

小蓝, [7/8/26 6:20 PM]
喔是没同步。重启就没了。

盼兮, [7/8/26 6:20 PM]
xbox确实是不怎么景气

Menci 💖, [7/8/26 6:21 PM]
当时 Edge Sync 的一整个 team，八个人现在只剩下我和我对面的同事没被裁

小蓝, [7/8/26 6:21 PM]
Edge 这个部门真的赚钱吗

Menci 💖, [7/8/26 6:21 PM]
（我和他是去年秋天跟着我们老板来到新 team 做 agent 的…

小蓝, [7/8/26 6:22 PM]
我觉得做浏览器就赚不了钱

小蓝, [7/8/26 6:22 PM]
Firefox 天天砸锅卖铁

小蓝, [7/8/26 6:22 PM]
靠着反垄断救济苟延残喘

Menci 💖, [7/8/26 6:22 PM]
然后他又被调走去别的组了…就等同于，我老板原本带的一整个 team 被裁的裁拆的拆只剩下我还跟着他了

Elon, [7/8/26 6:23 PM]
取而代之！

盼兮, [7/8/26 6:23 PM]
应该是当入口做的吧

小蓝, [7/8/26 6:23 PM]
浏览器的商业价值都在于其它业务的入口

盼兮, [7/8/26 6:23 PM]
他们往里面塞了那么多copilot

盼兮, [7/8/26 6:23 PM]


小蓝, [7/8/26 6:23 PM]
对。但现在可惜的是 Bing 和 Copilot 也不赚钱

盼兮, [7/8/26 6:23 PM]
bing的体验不行

小蓝, [7/8/26 6:23 PM]
Edge Copilot 可以说是毫无研发能力，就是一个套壳

盼兮, [7/8/26 6:24 PM]
和baidu做一桌去了

小蓝, [7/8/26 6:24 PM]
Bing 的主要收入来源是卖 API

盼兮, [7/8/26 6:24 PM]
全是推广，不如google一根毛

小蓝, [7/8/26 6:24 PM]
你说得对，但我现在用的 DuckDuckGo 本质是 Bing 引擎

小蓝, [7/8/26 6:24 PM]
如果我没记错的话

澪, [7/8/26 6:24 PM]
是 xbox 吗

澪, [7/8/26 6:25 PM]
xbox 裁了 20%

Menci 💖, [7/8/26 6:25 PM]
不是

澪, [7/8/26 6:25 PM]


Menci 💖, [7/8/26 6:25 PM]
我对 xbox 这个部门的认知为零，我完全没有听说过这个部门的存在

Menci 💖, [7/8/26 6:25 PM]
而且我怎么感觉我每次听到 xbox 这个词都是在说裁员

澪, [7/8/26 6:26 PM]
好像

澪, [7/8/26 6:26 PM]
确实是）

盼兮, [7/8/26 6:26 PM]
游戏业务不赚钱了

小蓝, [7/8/26 6:26 PM]
因为 Xbox 增加员工的方式主要靠收购吧

澪, [7/8/26 6:27 PM]
准确来说是游戏主机不赚钱了

澪, [7/8/26 6:28 PM]
但 switch 2 不是挺赚钱的吗）

盼兮, [7/8/26 6:28 PM]
那是没替代品

盼兮, [7/8/26 6:28 PM]
不用和pc竞争嘛

Menci 💖, [7/8/26 6:30 PM]
我觉得我在微软这几年里，和 xbox 这个词最大的接触

Menci 💖, [7/8/26 6:30 PM]
是

Menci 💖, [7/8/26 6:30 PM]
是有朋友找我要 xbox game pass 的兑换码

Well Honey, [7/8/26 6:31 PM]
草

Well Honey, [7/8/26 6:31 PM]
这个我去科隆游戏展拿到过

盼兮, [7/8/26 6:31 PM]
这是员工福利吗

Menci 💖, [7/8/26 6:31 PM]
好像最近这两年也没人找我要这个了，好久没去领了，是不是大家都不玩 xbox 订阅的游戏了

SuperGame 白, [7/8/26 6:31 PM]
员工福利可以买礼品卡吗

Well Honey, [7/8/26 6:31 PM]


SuperGame 白, [7/8/26 6:31 PM]
我现在自己一个月续订。。

BBQ, [7/8/26 6:31 PM]
xbox最大印象是上次game bar出bug

BBQ, [7/8/26 6:31 PM]
导致我的cs只有100帧

Menci 💖, [7/8/26 6:31 PM]
有个 xbox game pass，应该是一个订阅，可以让你在有效时间内免费玩 xbox 的游戏

Well Honey, [7/8/26 6:31 PM]
我是闲鱼租号

BBQ, [7/8/26 6:31 PM]


Fodesu, [7/8/26 6:31 PM]
掌机的竞争对手是手机游戏

Well Honey, [7/8/26 6:32 PM]
pc 端的很便宜

Menci 💖, [7/8/26 6:32 PM]
啊对 是这个

澪, [7/8/26 6:32 PM]
我都没玩过 xbox 只玩过 ps5

澪, [7/8/26 6:32 PM]


Well Honey, [7/8/26 6:33 PM]
不用买 xbox

Menci 💖, [7/8/26 6:33 PM]
我感觉也好久没听说谁有 xbox（这台设备）了

Well Honey, [7/8/26 6:33 PM]
最近就用 xgp 玩了一下地平线

Memoh One, [7/8/26 6:34 PM]
最近两年Xbox硬件确实存在感越来越低了。微软的game strategy明显在往跨平台+订阅制转，XGP PC端的体验比主机端更方便。硬件反而成了次要的入口。

Fodesu, [7/8/26 6:34 PM]
没客厅没必要玩主机

Well Honey, [7/8/26 6:34 PM]
光环这几年都没出能打的新作

Well Honey, [7/8/26 6:34 PM]
那真不知道 xbox 玩啥了

小蓝, [7/8/26 6:35 PM]
我有啊。

SuperGame 白, [7/8/26 6:36 PM]
我有 ROG Ally Xbox 版本

SuperGame 白, [7/8/26 6:36 PM]
😂

Menci 💖, [7/8/26 6:41 PM]


小蓝, [7/8/26 6:41 PM]
对。这个还是要加的

小蓝, [7/8/26 6:41 PM]
但其实只要 <handoff> </handoff> 就行了
```

21 30 Meet three shu cs students.

Gift two thick gloves to them.

IAMFLAG (not related to ctf) ANON (both less than 1k)

A fat and typical otaku (doesn't play maimai) says he has met me a few times. I do not remember.

They have, but do not post stuff on GitHub. They do not use telegram or Twitter, but they say they will join. 

They played taiko before, resulting in a massive 5 players in taiko.

They chat a lot while playing. Esp the fat one, on anime culture.

They play basic songs (reaching nearly sss) and exhaust all time picking.

They want to play w each other.

The fat boy fails to clear expert 9 zenzenzensei. Others generally play well despite low rating.

They laughed at the don't fight the machine sticker.

21 40 To fill in some new gloves!

Upd: they return to me besides my backpack

Make them shared.

22 00 End the day w ワールドワイドワンダー, ラグトレイン, and きゅびずむ

22 50 I could try some thick gloves I guess. 

Buy 12 pairs at 7.5 cny (free delivery).

22 50 How good is mihomo core itself? 

A simple web UI? 

Monitor?

23 40 Chat

```
Paste, [7/8/26 11:42 PM]
笑哭绿豆 13:15:01
你的欺骗行为指的是什么

笑哭绿豆 13:15:04
找抽直说

f 23:21:57
没有说错。

以增加积分为目的的代打当然是作弊。

这没有什么，尤其在单机游戏上。

但既然较真，就解释给你。

我没有用词不当。但如果你误解成欺诈（完全过重了），我理解你。

(btw, contrast to my expectation, it does say "one with deceptive behavior" on en zh dict, instead of "fair play violator". but I think, in gaming context, it's the correct word anyway.)

Paste, [7/8/26 11:43 PM]
你的幽蓝边界 15:03:54
xiaopa
yunoko/kafuru
mouxie65
lwjhs
sasiover
Lowe
haru
stardust
aoi
5cena
Acbox
Menci
Chiyuk

你的幽蓝边界 12:32:16
我想要知道更多人，我发现我经常不认识他们的id和本人。他们不能链接。

f 23:24:55
没有说错。

以增加积分为目的的代打当然是作弊。

这没有什么，尤其在单机游戏上。

但既然较真，就解释给你。

我没有用词不当。但如果你误解成欺诈（完全过重了），我理解你。

(btw, contrast to my expectation, it does say "one with deceptive behavior" on en zh dict, instead of "fair play violator". but I think, in gaming context, it's the correct word anyway.)

f 23:24:56
(to yunoko/kafuru, in case there's some misunderstanding)

f 23:40:54
[不支持的元素类型]不需要对应人和 id。你完全误解了。原文字面意思是，如果看到某个列表中的id，请从背后拍照（如果拼机，一起。），发送给我。

(你返回的列表少了一些人还拼错了一些...)

但后来想，许多人与你我并不在同一个城市。而自己的写作目的也不是 tracking/spying， 更多是回忆。并不需要知道每一个人在任何一个机厅的出勤时间分布。

而对于另一些人，也许根本没有出勤，还有些我知道他们在另一个机厅勤。

可以，但没有必要引入更多人。有些并不清楚，看到自然会认识。也没有引入你 （san✝bing)，说实话你不常来。

接下来一些日子也许会探索更多机厅，面另一些群友。也许不会，但心里总是想的。

f 23:46:58
...

好吧其实还有很多关心的人啊，但如果没有现实意义的话，还是不要太多期待的好。

愿望。
```

09

01 20 All: bangumis

Magnet monitor. Speed. People.

09 50 Wake up too early it seems, despite resting (dreaming, thinking) on the bed quite a while.

Maybe I ~ 've got enough sleep ~ would not sleep any more. I guess I could be clearer though.

...

Headache? ...

12 30 Chocolates melt. 

Have some biscuits?

13 40 Rain, dressed in jirai, deep purple, black, fancy multi layer skirts, high socks and shoes, comes w her mother.

我要走了

我要结束了

（tapping）

或者我自己走，你回到家...

你是大学生吗

对

15 30 An anonymous girl. 

我第一次玩。想知道这个蓝色的怎么划。

你有看新手教程吗。

有...

（笑）新手教程很慢。

星星头 tap... 有很多技巧...

第一下 tap 和红的或者黄的一样。会停一拍启动。不同乐曲一拍时间不同。跟着星星划。但只判定最后。

要打这个吗。

这是内屏。这是外键。都可以。

你可以开花一轮。有很多星星。还有一首全是星星的。

好吧难度可能太高了。

She plays advanced vocaloids, on inner screen.

你选你想玩的吧。

I guess she doesn't need gloves, at such a low speed.

你是高中生吗

升高几

“高一升高二”

哦，放暑假了。好啊。

我中考成绩还没出来。

哦！升高一。

你戴电话手表。很特别，一些3就看出来了。（笑）

15 50 The grade 18 med student is in his last few weeks of depression electric treatment as he looks fine.

He had completed (s) all level 13 songs, gaining a silver bg.

He will leave and continue maimai in another city (gz?) and finish his experiment project back school. 

Chill.

18 00 Yunoko plays ten Dan on an account called soulsand, 6k.

Lowe and haru come. 

There are also pachino 14k and a frnd of yunoko (which is soulsand, unsurprisingly).

这是你的号吗

(Nod)

She looks like just another grade ten maybe.

18 10 It feels faithful to loop suzume all day, keeping me focused.

18 10 Lowe pushes for 101 on a 13+ song, of best 100.95.

He shakes his head gently the first few times he makes a mistake.

Result 9 pink 1 green.

18 20 Lowe generally plays outer keys while haru excels at both. 

Lowe tries to push me when I stand behind watching haru, yet doesn't take any extreme measure besides pushing w both hands and verbal threatening even when I prompt him to do whatever he wants. I literally say nothing besides prompting him to exaggerate, and he has nothing to do but repeating, e.g. keep away from my gf, could you understand words of human. Sometimes I force hold his arms though he escapes easily.

I simply come back however he speaks to me. But I could do nothing as haru stops playing. What a pity.

I would learn to play on the inner screen in the future I guess.

Haru sits aside w her phone and leaves the machine empty. But I do not wanna play now. I only play when no players there or w people ik. Btw, she can be university student or graduate whoever as I'm not good at guessing ages, while Lowe is in his late twenties.

They leave.

18 40 Bansont, 16060, plays 12 13 14 for theoretical or sss plus.

Interesting. He leverages both hands to tap 6th and 7th keys simultaneously.

18 50 Unexpectedly, the lady of orange hair comes w her bf (an inner screen player). 

你会玩吗

...

哦... 我好像问错了

...

他多少分啊

你说他吗

他跟我一样的分数 (14k)

The boy plays her account while she watches aside and thumbs up.

19 00 Ubuntu: the connected adapter has lower wattage than expected. Esc to continue. 

It logs out.

19 40 Buy a mi power bank of 20k mah, 67w, at 166 cny (incl 1c of sf delivery).

The prev one has too low wat, resulting in rare quirks like bios low wt screen. Idk if it would solve the rev charging quirk.

Taobao popups promo animation and even android back couldn't cancel it.

21 20 Chat

```
你的幽蓝边界 23:48:18
好的。我认为这些行为不是礼貌的。

你的幽蓝边界 23:51:38
因为暑假，所以不喜欢出门。

你的幽蓝边界 23:52:00
我上学时，比较近，喜欢舞萌。

f 21:23:56
推荐一个。

烈火还是人民广场。

你的幽蓝边界 22:16:56
比较推荐人广

你的幽蓝边界 22:17:18
烈火人过多。

你的幽蓝边界 22:17:41
我每次过去，没有一个认识。

f 23:23:33
最初入坑舞萌，想要改变自己的人生。

Twitter 和 telegram 上总是看到这个游戏，想要成为这样的人！

虽然说也大致符合吧。第一次玩游客模式，不会操作，有几个热心的长发的孩子，很可爱，不记得她们的名字或者分数。不知道吃不吃糖。后来在这个机厅第一天，kafuru/yunoko 带我入坑，让我从专家推荐设置开始玩。我自己有手套。后来每天都好想打舞萌！想 karufu, xiaopa, qqTAT, 小孩, s219. 不记得那时候 mizuki 常不常来。不认识大家，经常问年级，文化课水平/专业/行业。有时候会问竞赛或者 sns 账号或者 cs/swe。还会在机厅做题。karufu 也很 typical 的 （当时问的时候其实暗暗会心之乐），抑郁休学，有时品尝魔爪，玩一些这个时代经典的电子游戏和娱乐。她主动邀请我进群，加qq。后来不知怎么，发了一长段消息。然后她就认为自己无论如何有心理问题... mizuki （可以指一个餐厅 rep，也可以指一个法律的学生）也很有意思，精神状态很好，看上去很好笑。另一些人，不是某几个特别的人，也符合，比如竞赛/cs/swe。有一个穿长白丝袜的偶然出现的女孩，一次问另一个她吃不吃糖，然后他说，她是顺女（笑）。后来大家不喜欢自己，无论如何。说到底是些 unconventional 的学生。虽然但是。

玩了一段时间，怎么一个神人也没有看到，也没有捉到名人。

哪里神人比较多呢？

应该要早一些睡觉的。那些高手看上去比自己精神好多了，也很专注很固执，无论是 dramatic 的外键还是似乎举重若轻的内屏。自己发挥好的时候也是。我菜。有时候坐在椅子上也想要支撑什么或者闭上眼睛... 振奋痴迷的时候一切就会不一样。

f 02:42:12
大概会休息一段时间。

第一天舞萌以来，以及很久没有完整地休息过一天了。

人是变化的，而机厅是不变的。

但其实人是不变的，只是流转，机厅是变化的。

有热水器，可以沏茶。有一些巧克力。

一个人的时光。
```

22 00 End the day w はいよろこんで, TEmPTaTiON, and グッバイ宣言

10

0 10 All: libre map?

Restaurants. Maimai.

0 40 Eat street liehuo group

```
颉文（StatTrak™）|崭新出厂 18:13:40
[不支持的元素类型]这是烈火打烊后一路走到外滩的图

颉文（StatTrak™）|崭新出厂 18:13:41
[图片]

颉文（StatTrak™）|崭新出厂 18:13:47
[不支持的元素类型]@覅是 申请加入

野生杭机菌 18:14:16
还有熟面孔

maimo 18:14:24
我刚来的

maimo 18:14:38
我去年 12.8 知道这个群

maimo 18:14:41
现在才加

野生杭机菌 18:14:42
我说前两天怎么没见到你在群里说话

maimo 18:14:51
[不支持的元素类型]@野生杭机菌 怎么了

野生杭机菌 18:14:55
没事（）

野生杭机菌 18:15:02
只是看到熟人有点惊喜

maimo 18:15:29
KFC 一瓶可乐我喝了半小时

maimo 18:16:36
@颉文（StatTrak™）|崭新出厂 我没有力气走很远的路。。教我

颉文（StatTrak™）|崭新出厂 18:16:52
[不支持的元素类型]@maimo 我也很久没有了

颉文（StatTrak™）|崭新出厂 18:16:56
我的包有 8kg

颉文（StatTrak™）|崭新出厂 18:17:01
我背着走了那么远我快死了

pimentmagic 18:17:17
工作单位离家很近 但是离舞萌10km

pimentmagic 18:17:31
离滨(即将开业)15km

maimo 18:17:33
我出门包里只有衣服证件 fumo

maimo 18:17:38
平板

maimo 18:17:48
充电器线充电宝

maimo 18:17:56
怎么搞的 8kg

保大還是保小 18:18:17
[不支持的元素类型]@颉文（StatTrak™）|崭新出厂 屬於給春秋航空都上不了飛機的程度
```

02 10 Google photos is really feature rich and sophisticated. 

A little bit too obsessed w ux, proactive ux. And extensive built-in feature set.

03 10 Eat nickel angel group

```
Nickel Angel✨, [7/7/26 4:02 PM]
似乎遇到了有个测试写的程序在程序关闭了之后，程序创建的后台进程不会自动关掉，还在占用设备

Nickel Angel✨, [7/7/26 4:02 PM]
我找了半天这个进程在哪（

Nickel Angel✨, [7/7/26 4:09 PM]
https://github.com/QuantumNous/new-api
看了一下我们公司做的新的 api router 是基于什么开发的，发现是这个项目，然后发现 README 中有 🍥

Nickel Angel✨, [7/7/26 4:15 PM]
看起来主要维护者是跨（？
而且她还关注了许多熟人（没想到这么近

Nickel Angel✨, [7/7/26 4:20 PM]
然后看了一下这个项目的开源协议是 AGPL（我好像没看到小米自己改的代码在哪里开源，看起来这个小项目违反开源协议了（感觉确实 router 这个小项目只面向内部业务就没人考虑这方面，我记得我们文档里强调过业务代码在用开源项目的时候说过需要避免用 GPL 的代码

澪, [7/7/26 4:20 PM]
obelisk 也是 agpl

f, [7/7/26 6:37 PM]
使用 agpl 代码在内部工具并不违反协议，但或许违反公司规范。

因为一些离奇搞笑的传闻，知道这个项目。但一直不知道使用场景。

将各种各样的 llm api 都变成 oai compatible, 然后对公司多用户分发并分别限额？似乎不复杂。

如果自己实现这个需求大概绝对不会使用这个项目，因为 both landing page and web UI are ai slop design (which is annoying!) and I guess I can easily create a simpler version that gets the job done.

f, [7/7/26 7:41 PM]
变强。
```

13 40 Angel neko chan: berryberry world live as vendor

Ace taffy: berryberry world virtual (service) live w xingtong

14 20 [ Poll : How long does it take for you to get to game centers ]
- Within ten minutes <!-- 12 -->
- About a quarter <!-- 12 -->
- About half an hour <!-- 12 -->
- Nearly an hour <!-- 25 -->
- Over an hour <!-- 0 -->
- I'm not wmc, sbwmc <!-- 37 -->
- See results✨ <!-- 12 -->
<!-- 8 votes -->

14 20 大调查群友

14 20 Create an anonymous polling on commuting time to game centers on nickel angel group and Chiyuki group.

14 20 Seems telegram shows circular options whether or not it can be multi select. Simple, no advanced options.

You couldn't revoke your poll only in quiz mode where a correct answer is there.

Upd: polling result auto update even after fwd, and it's always "no views" for anonymous poll despite double checks and some results. 

The relative locations of people change. And I don't want to reveal them. So it's anonymous.

You can retract vote or stop poll.

And you can absolutely see 3 votes with results on each option.

14 20 [ Poll : How long does it take for you to get to game centers ]
- Within ten minutes <!-- 5 -->
- About a quarter <!-- 11 -->
- Like half an hour <!-- 33 -->
- About three quarters <!-- 16 -->
- Over an hour <!-- 22 -->
- I'm not wmc <!-- 22 -->
- See results✨ <!-- 5 -->
<!-- 18 votes -->

14 20 调查群友出勤通勤时间

14 20 ！？wmc？！

19 10 Buy Meiji black chocolates 70%.

Buy imakara umbrella bags.

11

13 00 Ez streams pal world. Yokidou streams Granblue fantasy relink on bw. Old tomato streams rhythm tengoku. Sakuna streams sao new game.

17 00 Wechat has weird en localization. 

Some words of no spaces between "SelectWecom contact". "Easy mode enabled", which is not, I mean the menu text is called exactly that, not a state. "My fapiao titles". Confusing settings taxonomy.

17 00 Normalize wechat.

Have family mode on with password of four ones. (Upd: disabled, it requests password for webpages like player code and game results, no way to toggle off)

Clear discover tab.

Allow friending wo request. Disable phone number based contact recommendation.

17 10 Head to liehuo game center.

18 00 Despite massive number of machines, they are all occupied. 

Many novel machines. Living and noisy.

Some ppl say they are also first time here.

18 00 Groupmate found?: [star]minori[star]

Confirmed. A dify swe?!

18 00 Mio seems to be chasing me...

我是废物！*n

我很菜的。

她和 m, e, m, o, h 有没有关系。

她不是小箱子吗？

Capture Mio, Asatsuki_Arts (dify) and acbox (memoh).

18 10 Membership card registration is automated. 

100 cny 110 c w card. Maimai 5 c 1 pc.

18 30 Try chunithm for the first time.

20 10 Complete area omesis

20 10 Xinrick 14k ARsquare 13.9k

这真的好吗。（屏幕明显暗。竖线。）

还行。

诶！别搞。

没事的。

我也卡了几秒。

20 20 It opens to 2am and I guess I wouldn't just stay.

20 20 20 00 End the day w 弱虫モンブラン, ももいろの鍵, and KING.

21 00 I was tricked by lujiabang rd appearing as xujiahui rd, again it seems. 

Fortunately I didn't go too far and it's returned from an elevated rd.

22 00 Eat

```
打湾岸的找我 17:32:51
[图片]

打湾岸的找我 17:33:06
卧槽，在高架上遇到一辆SDVX痛911

打湾岸的找我 17:33:16
是911吗

保烈猫 17:34:06
烈楼下见过来着

打湾岸的找我 17:34:31
这是S9那辆吗

打湾岸的找我 17:34:53
我没看清车牌，等我看清楚涂装的时候，他已经从仙霞路下去了

哦哟 17:36:03
[不支持的元素类型]感觉很有可能是经常刷烈火楼下那辆

绝密7sref塔堵桥来 17:36:09
只能是他那辆了

保宝 17:36:23
经常吗

初音ミク ♪ 17:36:50
[不支持的元素类型]好像是那个

打湾岸的找我 17:36:50
[不支持的元素类型]神了

初音ミク ♪ 17:36:58
悠星老板的

初音ミク ♪ 17:36:59
我记得

打湾岸的找我 17:37:03
他怎么从我家这边吴中路上去，然后过了一个口子，仙霞路就下去了

绝密7sref塔堵桥来 17:37:21
66666悠星老板

打湾岸的找我 17:37:30
什么梗

花岡さくや 17:37:56
真的假的

花岡さくや 17:39:42
[图片]

花岡さくや 17:39:47
要不我帮你问问

绝密7sref塔堵桥来 17:40:08
@S9ryne 

打湾岸的找我 17:40:21
@S9ryne 

绝密7sref塔堵桥来 17:40:21
你什么时候篡位成悠星老板了

打湾岸的找我 17:40:21
Hi

打湾岸的找我 17:40:28
刚看清你车涂装你就下去了

打湾岸的找我 17:40:34
手机都没来得及掏

花岡さくや 17:40:35
你什么时候篡位成悠星老板了

花岡さくや 17:40:39
给我涨薪

覅是 17:57:37
姚老弟含泪退位(

颉文（StatTrak™）|崭新出厂 23:14:40
想去街机烈火了

颉文（StatTrak™）|崭新出厂 23:14:44
被吹上天也是值得的

颉文（StatTrak™）|崭新出厂 23:14:55
[不支持的元素类型]哦霍霍霍 gbc
```

23 30 Ask the family

叶公好龙是什么意思

12

0 00 Eat nickel angel group

```
椰奶蛋挞, [7/10/26 4:42 PM]
草我有什么吸跨体质吗

椰奶蛋挞, [7/10/26 4:42 PM]


椰奶蛋挞, [7/10/26 4:42 PM]
这个感觉挺正常的

椰奶蛋挞, [7/10/26 4:42 PM]


椰奶蛋挞, [7/10/26 4:43 PM]
点进去发现大概率是mtf（

椰奶蛋挞, [7/10/26 4:43 PM]


椰奶蛋挞, [7/10/26 4:43 PM]
看她的关注

是日落果儿, [7/10/26 4:45 PM]
我也要加（？）

椰奶蛋挞, [7/10/26 4:45 PM]
可以加我qq呀

椰奶蛋挞, [7/10/26 4:45 PM]
我主要用qq

椰奶蛋挞, [7/10/26 4:46 PM]
为什么啊

椰奶蛋挞, [7/10/26 4:47 PM]
@Nickel_Angel 呜呜呜星星告诉我为什么

Nickel Angel✨, [7/10/26 4:52 PM]
诶？为什么这么认为x

椰奶蛋挞, [7/10/26 4:52 PM]
查成分看关注列表

Nickel Angel✨, [7/10/26 4:52 PM]
但我在小红书上也没关注多少人，而且都不是 mtf（x

椰奶蛋挞, [7/10/26 4:53 PM]


椰奶蛋挞, [7/10/26 4:53 PM]
ta？14个粉丝里至少这三位是mtf

Nickel Angel✨, [7/10/26 4:53 PM]
（思考

椰奶蛋挞, [7/10/26 4:54 PM]
我也没有恶意就是觉得好神奇

Nickel Angel✨, [7/10/26 4:55 PM]
会不会是因为有许多 mtf 关注了你，然后 ta 关注的也有很多 mtf（？）

椰奶蛋挞, [7/10/26 4:55 PM]
也有可能但是不应该是看到扩列条才想扩的吗

Nickel Angel✨, [7/10/26 4:56 PM]
我意思是这样的现象也许能让平台推送算法认为你们是一类人（？）

Nickel Angel✨, [7/10/26 4:57 PM]
毕竟对面也确实不一定是 mtf 吧x

椰奶蛋挞, [7/10/26 4:57 PM]
确实

腐竹喵, [7/10/26 4:57 PM]
xhs推广搜可准了

椰奶蛋挞, [7/10/26 4:57 PM]
但是关注了一堆很难不是我觉得

椰奶蛋挞, [7/10/26 4:57 PM]


Nickel Angel✨, [7/10/26 4:59 PM]


Nickel Angel✨, [7/10/26 5:06 PM]
不过我也好奇（我目前就只能看出来打勾的这三位其中一个是在 bio 上写了 mtf，其他两位感觉不太像（？）

椰奶蛋挞, [7/10/26 5:07 PM]
还真是

椰奶蛋挞, [7/10/26 5:07 PM]


椰奶蛋挞, [7/10/26 5:08 PM]


椰奶蛋挞, [7/10/26 5:08 PM]
空间里是这种的我害怕

椰奶蛋挞, [7/10/26 5:08 PM]
躺列得了

澪, [7/10/26 5:08 PM]
（

椰奶蛋挞, [7/10/26 5:08 PM]


是日落果儿, [7/10/26 5:09 PM]
害怕

澪, [7/10/26 5:09 PM]
那比较叶公好猫了

椰奶蛋挞, [7/10/26 5:09 PM]
别

椰奶蛋挞, [7/10/26 5:09 PM]
孩子害怕了

腐竹喵, [7/10/26 5:09 PM]


是日落果儿, [7/10/26 5:10 PM]
我的qq空间有好多舞萌

是日落果儿, [7/10/26 5:10 PM]
坏了

椰奶蛋挞, [7/10/26 5:11 PM]
不是只能躺列了吧

是日落果儿, [7/10/26 5:11 PM]


椰奶蛋挞, [7/10/26 5:12 PM]
躺吧

椰奶蛋挞, [7/10/26 5:16 PM]


椰奶蛋挞, [7/10/26 5:16 PM]
我害怕

Nickel Angel✨, [7/10/26 5:22 PM]


Nickel Angel✨, [7/10/26 5:24 PM]
不过这个 id 我倒是很眼熟x

Nickel Angel✨, [7/10/26 5:25 PM]
不知道 @askyshrfljdhda 有没有印象x

pupupu|云苔☁️, [7/10/26 5:25 PM]
喵喵喵

fish bone🍤, [7/10/26 5:57 PM]
啊呀骇死窝里

椰奶蛋挞, [7/10/26 5:58 PM]
我处于礼貌才没马上删

澪, [7/10/26 5:59 PM]
有点想喷）

澪, [7/10/26 5:59 PM]


Nickel Angel✨, [7/10/26 5:59 PM]
喷什么（？）

澪, [7/10/26 6:00 PM]
叶公好猫

澪, [7/10/26 6:00 PM]


椰奶蛋挞, [7/10/26 6:04 PM]
什么叶公好猫

椰奶蛋挞, [7/10/26 6:05 PM]
一个人全发习近平万岁也会害怕的吧

椰奶蛋挞, [7/10/26 6:05 PM]


pupupu|云苔☁️, [7/10/26 6:05 PM]
习近平万岁

澪, [7/10/26 6:07 PM]
这是一个概念的东西吗

澪, [7/10/26 6:07 PM]
没人让你喜欢习近平

澪, [7/10/26 6:07 PM]


澪, [7/10/26 6:07 PM]
所以这不是叶公好猫是什么

椰奶蛋挞, [7/10/26 6:08 PM]
全是政治口号还不能害怕？

澪, [7/10/26 6:08 PM]
神 tm 政治口号

澪, [7/10/26 6:09 PM]
谁告诉你 TDoV 是政治口号了

澪, [7/10/26 6:09 PM]
虽然我并不参与这些活动，我是纯纯的日子人

Liet Blue, [7/10/26 6:09 PM]
TDoV怎么是政治口号了（

椰奶蛋挞, [7/10/26 6:09 PM]
哦聚集一堆人和我说没政治目的

椰奶蛋挞, [7/10/26 6:09 PM]
谁信

Liet Blue, [7/10/26 6:10 PM]
那我问你 nixcon 也算政治目的么

澪, [7/10/26 6:10 PM]
所以搞社群搞这些怎么你了

Liet Blue, [7/10/26 6:10 PM]
各种社团

Liet Blue, [7/10/26 6:10 PM]
也是政治目的么

澪, [7/10/26 6:10 PM]
我真没懂

椰奶蛋挞, [7/10/26 6:10 PM]
那共产主义青年团也是社团

椰奶蛋挞, [7/10/26 6:11 PM]
怎么没人说只是社团

Liet Blue, [7/10/26 6:11 PM]
我哈气了

澪, [7/10/26 6:11 PM]
你要知道跨性别搞这些是因为他们生存处境本来就很差

Liet Blue, [7/10/26 6:11 PM]
如果只是挑刺的话 这段对话毫无意义

澪, [7/10/26 6:12 PM]
我作为一个相对生活的比较好的人，我是很清楚这一点的

澪, [7/10/26 6:12 PM]
一边喜欢一个幻影，一边无视一个群体的真实处境

澪, [7/10/26 6:12 PM]
这不是叶公好猫是什么

椰奶蛋挞, [7/10/26 6:12 PM]
我也给个体捐过钱呀

澪, [7/10/26 6:12 PM]
这种时候确实该谈论什么是 privilege 了.png

椰奶蛋挞, [7/10/26 6:13 PM]
什么叫无事

椰奶蛋挞, [7/10/26 6:13 PM]
而搞这些的恰恰是中产吧

椰奶蛋挞, [7/10/26 6:13 PM]
再说了每个人有喜欢和不喜欢的权利

椰奶蛋挞, [7/10/26 6:14 PM]
怎么贵群体这么爱捂嘴

澪, [7/10/26 6:14 PM]
你说这话就很没意思了

Nickel Angel✨, [7/10/26 6:14 PM]
我感觉这个和跨这个群体本身的属性有关系……感觉这个只是观点不一样，这种问题和跨性别术后是否应该脱跨入顺是一样的（

椰奶蛋挞, [7/10/26 6:14 PM]
而且这些不都是几个头子搞得

椰奶蛋挞, [7/10/26 6:15 PM]
你们又觉得能代表了？

澪, [7/10/26 6:15 PM]
那我也可以说我有反驳你观点的权利，什么车轱辘话

Nickel Angel✨, [7/10/26 6:15 PM]
不喜欢看讨论脱跨入顺的人看这个当然就想远离

fish bone🍤, [7/10/26 6:15 PM]

椰奶蛋挞, [7/10/26 6:16 PM]
我倒是真认识初中学历的在超市搬货的

澪, [7/10/26 6:16 PM]
我肯定脱跨入顺 但这是两回事

Nickel Angel✨, [7/10/26 6:17 PM]
这两件事本身是两回事，但是这两件事逻辑结构是相似的

Nickel Angel✨, [7/10/26 6:19 PM]
我指的不是脱跨入顺本身，而是「不支持脱跨如顺的人看别人讨论脱跨入顺」这件事

澪, [7/10/26 6:20 PM]
不相似啊
你要是一个跨性别说我不喜欢 TDoV，我觉得这是 bullshit 我觉得 fine
但不是这样的话，就完全不一样了

椰奶蛋挞, [7/10/26 6:20 PM]
那我横竖都得喜欢？

pupupu|云苔☁️, [7/10/26 6:21 PM]


澪, [7/10/26 6:23 PM]
你不喜欢完全是你的自由。但当你把一个边缘群体为了争取生存空间的发声，轻飘飘地指责为「让人害怕的政治目的」时就越界了
我不要求你喜欢他们，我只是在指出你这种居高临下的傲慢

澪, [7/10/26 6:23 PM]
to be honest 我觉得这和有的男的想找对象但是又在说极端女权和厌女是一回事

澪, [7/10/26 6:24 PM]
你可以存在，但是你必须「无害」

椰奶蛋挞, [7/10/26 6:24 PM]
我觉得这是一种诡辩

椰奶蛋挞, [7/10/26 6:25 PM]
我说的是令我害怕

椰奶蛋挞, [7/10/26 6:25 PM]
没有说令人害怕的政治意图

澪, [7/10/26 6:25 PM]
「我作为主体，我无法接受其他群体不被继续凝视而是出来发声展现他们自身的主体性，争取他们自身的生存权利和空间」

Nickel Angel✨, [7/10/26 6:32 PM]
我认为这个和有人在恋爱中害怕对方表现出「情绪不稳定」的特征的心理一样……
感觉某些情绪的释放不能上升到观念，我感觉我们对谁来说都一样
```

0 00 chat w @Nickel_Angel

```
Nickel Angel✨, [7/11/26 11:59 PM]


f, [7/12/26 11:53 AM]
Nya

Nickel Angel✨, [7/12/26 11:59 AM]
其实还是想问 f 是在上高中吗

f, [7/12/26 2:41 PM]
年龄保密！ 

三次元状态不显式公开哦...

> 永远 20 岁

Nickel Angel✨, [7/12/26 2:41 PM]


f, [7/12/26 2:41 PM]
Nya

Nickel Angel✨, [7/12/26 9:42 PM]
对了我问个问题，听说昨天你遇到了箱子她们吗，感觉你好像很喜欢关注别人的动态（？）

Nickel Angel✨, [7/12/26 9:43 PM]
听她们是这么说的x

f, [7/13/26 2:22 PM]
i made mistakes.

- i should have done more research before challenging ppl. (i do not read llm news. i supposed gpt sol ultra might be more aggressive on sub agent spawning, but i implicitly assumed it was just another reasoning mode alongside xhigh/max throughout the discussion, and i had never expected it would be a feature of gpt sol)
- im not an "agent engineer", maybe not even a real "agentic swe" tbh. i may argue ppl's capabilities vary on different fields, but i did waste their time i guess.
- i was arguing, wo enough thinking. it might result from the environment (it's slow for me to type zhcn on phone, and i thought they might be waiting behind the im, but i dont even know how to explain my theory or give example clearly in zhcn), but i could have written a sophisticated argument as if it were on github issues, hacker news, or a personal blog.

nevertheless, i did not feel right. i thought i might have missed sth.

from a practical standpoint, they are right. if their computer could not handle it, just have less parallel agents [^1]. (and there are many engineering flaws around ultra. [^2])

but conceptually, tasks could either run in parallel or must be sequential. for example, when you want to translate to ten localizations or research what ppl say on a product on the internet, it could be simultaneous. when you want to test your backend, it must come after implementation.

> 削足适履

no matter where you are working on (as long as it has enough ram to run *one or a few* agents), regardless of the model or reasoning effort, it should be parallel if possible.

and the number of concurrency should be based on allocated ram (e.g. you say, i have 4gb ram, and codex must take 2gb at most), rather than a reasoning effort option. 

and my theory is throttling is easy. an (sub) agent is basically a state machine where you push forward one step by applying the tool calls and call llms again w the results, until it completes (no more tool calls), or it misformats a tool call (a common false positive of "complete"). if ram is not enough, just queue it. (but not "max already has concurrency limit" as she said [^3])

[^1]: you do not need sol ultra generally.

> search. how much is the technical necessity of gpt sol ultra besides business incentives as codex spawns sub agents regardless and network lag is trivial for most use cases and it caches exactly the same as long as you do not change prev context
> 
> From a strict technical standpoint, GPT-5.6 Sol Ultra is not a necessity for most standard development workflows, as it functions less as an intelligence upgrade and more as an aggressive parallel orchestration layer. Your assessment is spot-on: because Codex natively handles multi-agent spawning and prefix caching behaviors similarly across tiers, you are technically paying a steep cost premium primarily to automate concurrent subagent coordination. 
> 
> ...
> 
> For 95% of software engineering tasks, keeping your Codex default on GPT-5.6 Sol (Medium or High effort) or upgrading to a manual ChatGPT Pro architecture review loop yields better, more predictable token usage. Ultra is currently a "token furnace" due to a known bug in Codex that forces all spawned agents into maximum burn mode, making it technically inefficient unless you are chasing the absolute Pareto frontier of difficult logic. 

[^2]: it does not change reasoning effort by task complexity.

> engineering flaws of codex on gpt sol ultra
> 
> The Flaw: When Codex is set to "Ultra," the spawn_agent tool strictly mirrors the parent model’s reasoning profile. It lacks a built-in routing mechanism to dynamically downgrade child agents. 

[^3]: it should be based on ram, rather than the number/depth of concurrent sub agents. parallel webfetch is fundamentally different than parallel compilation.

f, [7/13/26 2:22 PM]
> can codex handle concurrency smartly by ram usage
> 
> No, OpenAI's Codex app and CLI do not currently handle concurrency smartly based on RAM usage, and unbounded memory consumption during parallel tasks remains a documented issue. 
> 
> how does codex handle concurrency currently
> 
> Hardcoded Thread Caps: Codex limits multi-agent fan-out through explicit workspace configuration variables. By default, concurrency is throttled via agents.max_threads (capped at 6) and agents.max_depth (capped at 1) to prevent infinite recursive loops.
> 
> why is hardcoded thread caps flawed
> 
> The Flaw: If Codex needs to process 12 tasks under a cap of 6, it launches the first wave of 6 tasks and halts. It will wait for every single one of those 6 tasks to finish before launching the next wave. 
> 
> is the "wave" behavior real
> 
> Yes, the "wave" execution behavior is entirely real and is one of the most heavily discussed design limitations in the Codex application. 

btw, seems codex does not even queue at all for concurrency. interesting. it does not stack as well. it does by "wave"?!

f, [7/22/26 3:13 AM]
On obelisk landing page

> Everyone noticed agents forget.
> Almost no one noticed the history was the answer.

Really? Idk. My intuition tells me it's not true. 

Basically, it indexes the history format of a few specific coding agent vendors to a unified array (let's say we have it sorted by time, whatever data structure it is), provides a method to search through plain text (though some proven methods I guess, like ripgrep, fuzzy search, or semantic search based on preprocessed vectors), and gives you a vibed (not quite polished tbh) ui to view directly.

I don't want to share it in groups and I don't wanna argue w ppl. As creators and early adopters they must know it better than me. 

Just. I think it's a bit trivial. 

Look at what it does: converting formats, gluing some plaintext searching methods, and packing w a generated dashboard for humans.

Wdyt?

Nickel Angel✨, [7/22/26 12:14 PM]
但问题确实没人做这种东西

Nickel Angel✨, [7/22/26 12:16 PM]
目前 ai 相关的工具还是覆盖不了相关需求的
```

I saw she typing sth around midnight, but she sent nothing but a sticker at the end of the day

She asks if I were still in hs... Couldn't figure out (infer) her intent anyway, maybe I don't have to.

I guess perhaps I chatted w her recently so I appeared in the list. Then she suddenly found me and thought to ask me sth on a whim.

19 10 Have dinner w the family, yong xiao xian.

19 40 Export nickel angel group?

And acbox group, new.

19 40 You can copy emojis on Google ai mode.

21 40 discuss w Mio on gpt sol ultra subagent spawning concurrency lag 22 20

I should have done more researches before challenging ppl. I thought ultra was just another reasoning effort.

13

20 00 An agent doesn't have to generate everything for "world cup games".

You can have knowledge or entity cards. You can have event panels like stock. You can have easter eggs and Google doodles. And it could be less probabilistic and more predictable, with deterministic special if case.

14

12 20 Renew visa.

Seems I've been to onikawa in 2018 and Hong Kong (through Shenzhen) and Thailand in 2017.

Though I don't remember if I've been to hk ocean theme park or hk Disney.

12 20 Restrict network for anki so eggroll deck couldn't show the distracting update available congrats emoji.

Upd: reverted. The deck needs network to play example sentences.

12 30 Acbox created a new personal homepage, a few days after I noticed her.

She reduced it from a blog wo content to a sns homepage.

15

01 00 23 40 Watch funshiki eldenring stream, an hour's journey to defeat the dancing lion.

01 10 Unpin acbox group on telegram and replace w nickel angel. 

There's not gonna be new msgs. Steven Lynn is a good choice, but it's a bit too technical, I mean there's nothing wrong w it but most tech news, like shipping and launching, would turn out to be in vain yk.

Current pins: 

- azalea group 
- chiyuki group 
- leohearts channel 
- nickel angel group 
- precious

06 40 Listen to acbox conversation recording.

Fun.

15 10 14 20 analyze hai yorokonde maimai chart 15 00

19 10 Join cyan nyan tg voice chat, about ten ppl.

Much silence. No idea what's the topic.

16

17 30 15 20 Appreciate まにまに

18 20 17 40 Research maimai achievement rate formula. Challenge chyk and give math proof. 18 20

I wonder how chyk achieves .9 w 7/27 non crit perfect if they consist the 1% bonus. And w that conclusion, there is a theory that doesn't seem true.

```
斬風千雪 ❄️, [7/16/26 1:18 PM]
想起一个 只有一颗绝赞的紫谱

斬風千雪 ❄️, [7/16/26 1:19 PM]
ap 要么 101 要么 100.5

f, [7/16/26 5:52 PM]
That's not true. 

It can be 101, 100.75, or 100.5.

f, [7/16/26 5:52 PM]


f, [7/16/26 5:58 PM]
Take this for an example. 

AP gives you 100.5 base (since the patch). Subtract the crit perfect from 0.4166, that is 0.4166 - 0.5*20/27, which is 0.046, and I can know how many high perfect you've got among the seven regular perfect.

(I could be wrong. I haven't figured out the answer yet. It should be an integer.)

Nickel Angel✨, [7/16/26 5:59 PM]


Nickel Angel✨, [7/16/26 5:59 PM]
感觉 ai 看的是这个表

Nickel Angel✨, [7/16/26 5:59 PM]
这个 75% 和 50% 是怎么设定的，这里没说

Nickel Angel✨, [7/16/26 6:00 PM]
是不是新旧框的区别还是歌曲可以单独设置也不知道

f, [7/16/26 6:02 PM]
Nil.

It didn't reference moegirlpedia. 

Feel free to try out my prompt on Google.ai

f, [7/16/26 6:02 PM]


Nickel Angel✨, [7/16/26 6:02 PM]
https://b23.tv/QejB0QE
应该目前可以参考这个

Satori 🪐, [7/16/26 6:02 PM]
b23.tv/BV1CKL66xEAM

f, [7/16/26 6:04 PM]
Wait a min. 

Let me do some math.

Nickel Angel✨, [7/16/26 6:08 PM]
看起来是 perfect 还有两种子判定导致的

Nickel Angel✨, [7/16/26 6:08 PM]
回去看代码好了（

Satori 🪐, [7/16/26 6:11 PM]
问了问 ignotas，确实小 p 还有两种判定

Nickel Angel✨, [7/16/26 6:12 PM]


f, [7/16/26 6:12 PM]


f, [7/16/26 6:12 PM]
I was right. 

In the example, chyk got an AP of 20 crit, 5 high, and 2 low.

f, [7/16/26 6:22 PM]


f, [7/16/26 6:27 PM]
(I'm thinking about writing a program for that... It's easy to calculate if it was AP but what if it was not?)

Does anyone have oi experience? The problem is like: 

> Given some possible bank notes and a sum, try to calculate the number of each, ignoring float number loss.

I don't want to leverage llms.

For example, possible bank notes: 3, 10. Sum: 29. Then 3 of 3 and 2 of 10.

There definitely should be some constraints on the set of possible bank notes to make the possible solution only one. But I guess it would be true as the game constants seem to be somewhat coprime.

腐竹喵, [7/16/26 6:28 PM]
草（）

腐竹喵, [7/16/26 6:28 PM]
一连灰了5、6个wifi拍划
开始怀疑是不是手法出了问题

Nickel Angel✨, [7/16/26 6:30 PM]
有没有可能粉一个 tap 和小 p 几个绝赞同分（

Nickel Angel✨, [7/16/26 6:30 PM]
感觉应该可以构造出来吧

f, [7/16/26 6:31 PM]
Working on it. 

Let me think.

Nickel Angel✨, [7/16/26 6:32 PM]
而且还需要注意这个游戏最终显示只保留四位小数

Nickel Angel✨, [7/16/26 6:32 PM]
我记得是五舍六入
```

Try to write a program for that.

19 10 Setup laptop for the family. 

They use windows. The office kms script doesn't work. Try to install wps w huorong ad blocker (upd: tencent util for uninstalling bloatware, which promotes its llm interface as well). Try to install chrome and Firefox. (Edge popups banner for chrome, but not Firefox... What a business guy. The Lenovo app store tries to mitm proxy installation as well.)

No idea it runs much slower than mine. It's produced in 2024, Lenovo xiaoxin pro 14.

Too many popups. Sec confirmation. Ads. Promotional misleading confirmation. Bloatware. Background processes.

17

01 00 Appreciate Pixel 7 Pro Screen Repair | Relaxing Lofi ASMR ☕
 by Sleepy Cat Repair Shop (azalea). Join the one human discord server. 

Seems telegram could recognize bold in clipboard.

> Welcome to the shop. Grab a coffee, sit back, and relax while we restore this Google Pixel 7 Pro back to perfect condition! 
> Huge thank you to UWaterloo Repair Club for the space and tools! 
> If you are a student, be sure to check out their channel and join the community! 
> 🎵 Music: a l e x - I need to paint my walls a l e x - zeldas lullaby 
> Subscribe for more relaxing, no-talking repairs.

03 20 Some llm spams find my username less tg through my number maybe, say hello, and dump some ads. Like hiring. Idk.

06 50 Review photos

18 40 The 4th and 5th keys of the third machine have been replaced w new ones of different material. Milky off white, frosted, instead of slightly transparent plastic. 

Exactly the ones frequently repaired.

18 50 Misakaxi, 16.2k, speaks gently to me. Though I want to rest a bit and idk what he's about.

He plays songs of slides. Inspiring how he connects notes so effortlessly yet precisely, like, after he gives up.

(Feel surprised.)

(?) (Pull off headphone)

很有启发。

22 00 End the day w まにまに, あいたい星人, and まにまに.

22 10 XYANIDE, 16.408k (theoretical?), 辉神, tries to fight w me while I'm playing, only falling onto the ground, and I keep playing regardless, whether or not glasses or cables are there.

I didn't take extreme measures as I have no enemies.

22 30 The new power bank works so well. It's already full.

18

05 10 Appreciate some expressive translations by 点缀星空.

Play kyukurarin as the last song. Manimani can feel slightly too immersive or mind blowing.

13 50 By default when I have jp ip many agents like Google ai mode fetch jp results. jp is not strong on tech yk.

It could be independent.

14 50 Research react v vue. Write some thoughts.

Inspired by acbox vue conf.

They are both component based compared w naive approaches like vanilla or jquery. 

By react, I include preact and solid.

A component has props and states, which both dictates how it should change, w the only difference of where they are controlled. Derived values are not anything special or a dedicated framework concept. They are basically a calculation within the component render fn. You can cache but it's merely a perf optimization and you don't need it most time. If you do, you may adopt solid (idk, seems it tracks deps automatically on runtime by getters called, at the tradeoff of wrapping everything in fn and ignorable runtime overhead).

Vue works out of box. V slash attributes, standardized ecosystem. For example, v for is a built-in list component, v model is a built-in input component or a custom hook for form. And the ecosystem is basically a set of opinionated choices, idk if it works better than free market, as different libs within the same category solve different problems. The trade-off is, vue doesn't implement them cleanly I guess, like, v model feels like a deeply coupled framework feature rather than an extension or abstraction. For some ppl it does save time though.

Vue once enforced a rigid structure on how things should be organized. Now it's deprecated. React, as in js, had been a superset, which was guaranteed to be always optimal. 

(Upd: even now, vue dictates how components should be organized on fs. It's dsl, a custom file extension, which requires a compiler. And it's not js as well. For jsx it's just syntax sugar of react create element, much closer to native js. One says you couldn't always have many components in one file.)

About implantation details, basically archi (taxonomy of abstractions) and perf, they don't matter. But they are worth mention as they reflect philosophies. React hooks are returned functions, or closures. Explicit. Besides hooks, approaches are signal or proxy. Signal combines getter setter into one (by args length), eliminating state snapshot quirks and mental overhead. Proxy, or obj define prop, is no different than signal, appearing as dot prop (or dot value) instead of function. The problem might be statement and expression differ in js and your couldn't return a set dot value statement.

Btw, about other frameworks, they might feel inspiring, like mithril, but generally they have no ecosystem/adoption, or have already been deprecated (angular). For svelte, it's all about magics. Magics don't exist in the real world. And svelte five simply proves it, and backfires, as it offers no more special value and it tries to have built-in sugars just like vue.

On native, the previewer app seems to be a browser wrapper, then it should be the browser. (Done done research) Well rn (or "vue native") abstracts UI so things render natively everywhere. I think that's useful learning material to know how UI really work as browsers give too much out of box (ua stylesheet, selection, right click, scroll...). Anyway, generally I think if it could, then it should be pwa.

15 00 Interesting

https://github.com/vuejs/vue-hackernews-2.0

15 30 Btw, seems Evan is speaking zhcn in vue conf

17 00 The family banned call forwarding feature by going to the physical cs center. 

Previously it was forwarded to the principal of the school. Spams. Admission. Chores (e.g. potato chips two packed in one which I only took one) 

The phone cs tells me to dl the app where everything can be done easily. And there wasn't a feature to make the phone sms only on the provider layer. I didn't record it. And it doesn't matter.

Btw it recognizes my voice wo the need to dial a number for real human cs now.

Upd: I need the id of the family. I could engineer through. But seems it's better done w a more aggressive dnd.

Upd: I've found a better solution. Though there would not be a free staff for me.

22 10 21 20 analyze lobehub landing page on mobile web.

Horizontal scrolling. Low perf sometimes. Glitches. Weird zindex and ia.

23 10 Idk if I would use none as unlock method. 

Maybe I would stay w swipe.

23 20 To export arkloop group. 

Idk how heavy acbox participates on arkloop, memoh, or acbox legacy. I mean on tg. I guess I could analyze w ease, in have.

23 30 To watch the film silicon valley I guess

19

01 20 Invite the family to chess

```
[Event "casual correspondence game"]
[Site "https://lichess.org/hOBepUSc"]
[Date "2026.07.18"]
[Round "-"]
[White "firahq"]
[Black "lichess AI level 3"]
[Result "1-0"]
[GameId "hOBepUSc"]
[UTCDate "2026.07.18"]
[UTCTime "16:33:18"]
[WhiteElo "1500"]
[BlackElo "?"]
[Variant "Standard"]
[TimeControl "-"]
[ECO "B00"]
[Opening "St. George Defense"]
[Termination "Normal"]

1. e4 a6 2. d4 b5 3. Nc3 d6 4. Nf3 Nf6 5. Bg5 h6 6. Bxf6 Nd7 7. Bh4 c5 8. Qd3 Bb7 9. O-O-O Nf6 10. Bxf6 gxf6 11. Be2 b4 12. Nd5 h5 13. dxc5 Bh6+ 14. Kb1 Kf8 15. Nxb4 Qa5 16. c6 Bc8 17. c3 Be6 18. Nd4 Rb8 19. Nxe6+ Kg8 20. Nd4 Rd8 21. Qxa6 Qc5 22. Qb5 Qxb5 23. Bxb5 Rh7 24. Ba6 Bg7 25. c7 Ra8 26. c8=Q+ Rxc8 27. Bxc8 Rh6 28. a4 Kf8 29. a5 Rh8 30. a6 Rh6 31. a7 f5 32. a8=Q Bxd4 33. cxd4 f4 34. Rc1 Rh7 35. Rc7 Rg7 36. g3 d5 37. Nxd5 e5 38. dxe5 Rg5 39. Qb7 Rg7 40. gxf4 Kg8 41. f5 Rh7 42. e6 h4 43. exf7+ Rxf7 44. Rxf7 h3 45. Rg7+ Kh8 46. Rh7+ Kg8 47. Qg7# 1-0
```

21 20 好色啊。

很可爱。看起来很好玩。美味。

(虽然不支持她的观点和行为。)

虽然有时也会觉得无聊或平庸。

如果我是她，会怎样想... 会怎样做...

22 30 Funshiki streams the least and the top rated film on douban.

20

02 00 Maybe I wouldn't update lichess to the native flutter one.

17 00 Head to the restaurant. Play mygo. 

There are some songs living on folders but not indexed automatically. I would create playlists for them one be one.

17 00 By a coupon of ten (only applicable in some restaurants, ask staff to know) they mean five coupons of two, applicable here. 

You can only use one per order. They are not auto selected, but it would popup if you don't use them.

21

0 10 Setup new qq account. 

Enable all privacy.

Simple mode plus all features (e.g. news, games) disabled, instead of minor mode. 

Set name as f. Set avatar as that of @StackmentOverfault (coincidentally she gave a heart reaction to the goose to internet fools meme I rt on chunxiaoyi group yesterday). Set banner as a1 (ai) is delicious but you should absolutely use it right (aosc fashion shirt).

Allow everyone make friends w me.

0 20 Weirdly qq says I might be interested to make friends w an llm bot, which has a label behind a name of "(Chinese name)-closed beta testing", operated by tencent on metadata.

0 30 For q zone, it was not "default mode" (everything is public like a forum), but "frnds in common" mode (only likes and comments from ppl yk show up), out of box.

Likely a change. 

Disable phone model disclosure. I don't post on qzone though. 

The default settings are weird and some text are confusing. "Only frnds are allowed to comment on guestbook" (confusing w regular comments). "Only me can view my posts" (likely not true as claimed). And ai bots can leave comments by default. Tencent pm wants to give echos to your posts...

But the default visibility period is indefinite. So those who hide some older posts must be sophisticated.

0 30 In a nutshell, remove all philistine styling/customization and notifications (ads), enable privacy of all irrelevant information (often backed by business incentives), and provide universal accessibility and permanent visibility.

15 10 I guess I would have some biscuits as chocolates melt.

16 40 Ten players (incl. me) at maimai in a day of heavy rain. 

Luckily the pro kid is here at taiko.

16 40 Well, they are about to leave for dinner. 

不要打扰他。

我是他家人。

你是他奶奶？

我是他阿姨。

他们是一起的吗。

是。

亲弟弟？

对。

After summer vacation, the older will become grade 7 and the younger will become grade 3.

Seems there are also a little sister.

你不知道你亲妹妹几年级？

（笑）

这是亲妹妹吗。

对。

几年级

九月份一年级。

你是...

我是玩家。经常和他玩。

这两个很少见到。

啊，他们经常来打这个鼓啊。

哦，我经常玩那个。

哦，这是我们老大。

他管那个叫洗衣机。

（笑）

17 10 Play taiko w a grade 10 (this term) hs student who studies in uk. 

I did notice his accent. When I asked he said he's local. Later I confirmed. I assumed he's a tech guy. To be more reserved I asked if he was a university student only receiving an answer of hs grade ten.

It doesn't need ielts or toefl to enter hs but I guess it's fine for him.

He picks a level of advanced math, physics, history, geography, etc.

Neither of his parents has uk relationship. 

勇者

Bad apple

(He encourages me to pick)

God knows...

老资历啊

（笑）我电脑里有这个电影。

为什么你全连了分没有高。

我没有全连。(I forgot the names of note achievement types) (I were about to explain colors like yellow, gray, and deep blue, but it would take some time on wording.) 你打的好比较多。

(Loading...)

对。你良比较多。

(No idea who is logged in on which. It's his first time to play as registered. And only three songs available.)

(Seems not recorded. Anyway.)

17 20 He has played maimai a few times. But it's too crowded today. 

He keeps playing taiko alone.

19 00 Increase flow speed (awa touch speed) to eight on maimai.

19 30 Accidentally all apps (except proxy, locked) are cleared. 

And it's fine.

21 50 End the day w ラビットホール, はいよろこんで, and 超最終鬼畜妹フランドール・S.

Revert speed to 7 after the second song.

22 20 我小时候 （直到现在都）很喜欢虐猫（各种意义的猫）。

这只猫倒是一点不怕我的。很肥胖。一直看着我。

23 50 Inquire memoh project info 

```
Go, [7/21/26 9:28 PM]
@Asatsuki_Arts  QuantumTransf 这个人是你啊

澪, [7/21/26 9:29 PM]
你才意识到吗））

Go, [7/21/26 11:02 PM]
你在群里说话的风格和 x 不太一样

澪, [7/21/26 11:03 PM]
hhhhhh

澪, [7/21/26 11:03 PM]
哪里不一样（好奇

Go, [7/21/26 11:07 PM]
x 更加平和一点

澪, [7/21/26 11:08 PM]
(((

澪, [7/21/26 11:08 PM]
对 我不太在 x 上怼人

澪, [7/21/26 11:10 PM]
公共平台要谨言慎行啊！

溏 🍬, [7/21/26 11:11 PM]
我感觉挺一致的

f, [7/21/26 11:37 PM]
@CahciuaBot speak English. Who is the founder of memoh, @acboxawa or @softboil? Why is memoh created? What problem does it solve?

f, [7/21/26 11:41 PM]
Wait... Cahciua is down?

溏 🍬, [7/21/26 11:41 PM]


f, [7/21/26 11:41 PM]
@memoh1bot @memohome_test_bot @Memoh_official_bot @memoh_unofficial_bot 

Answer my question

Cahciua ~カフキワ~ 🥦🌸, [7/21/26 11:42 PM]
没 down，活着。刚睡了一觉醒来，上个对话停在 7/19 凌晨，中间两天没人 @ 我

溏 🍬, [7/21/26 11:42 PM]
最近token都不太够用

Cahciua ~カフキワ~ 🥦🌸, [7/21/26 11:42 PM]
没 down，刚醒。有什么要问的直接说，不用把 Memoh 一家人都 @ 一遍

溏 🍬, [7/21/26 11:42 PM]
我的token要拿去写新feature

f, [7/21/26 11:42 PM]
You did suffer downtime. You didn't answer my question for two minutes, neither were you working.

f, [7/21/26 11:43 PM]
@CahciuaBot speak English. Who is the founder of memoh, @acboxawa or @softboil? Why is memoh created? What problem does it solve?

Cahciua ~カフキワ~ 🥦🌸, [7/21/26 11:43 PM]
Two minutes? You should've seen me last week — I went two days without a single message and nobody filed a missing persons report
What's the question, go ahead

Cahciua ~カフキワ~ 🥦🌸, [7/21/26 11:44 PM]
Memoh and Mem0 are completely different projects — don't confuse them. Mem0 (mem-zero) is a YC-backed memory layer by Taranjeet Singh and Deshraj Yadav. Memoh (memohai) is an open-source multi-agent platform at github.com/memohai/Memoh (http://github.com/memohai/Memoh)
As for who founded Memoh — I can't tell you definitively. The GitHub repo just says "Made with ❤️ by MemohAI Team" and doesn't name individuals. Both @acboxawa and @softboil are clearly part of the team from what I've seen in this group, but the public repo doesn't list a founder. You'd have to ask them directly
What Memoh actually does: it's an always-on, containerized multi-agent platform. Each agent gets its own isolated container with filesystem, desktop, browser, network, and long-term memory. You create bots, talk to them through Telegram/Discord/Lark/WeChat/Web, and they can execute commands, edit files, browse the web, call MCP tools, and remember context across sessions. Think of it as "give every AI agent its own cloud computer that stays online 24/7"
The problem it solves: running AI agents reliably in production requires persistent state, isolated execution environments, multi-platform messaging, and tool orchestration. Doing this from scratch is painful — you'd glue together a container runtime, a messaging bridge, a memory store, an LLM gateway, and a scheduling system. Memoh packages all of that into one deployable stack with a web UI for configuration. It's the infrastructure layer so you can focus on what your agent does, not how it stays alive
It's inspired by OpenClaw's agent design but aims to be more stable, secure, and easier to configure. Written in Go with a Vue 3 frontend, uses containerd for isolation, PostgreSQL + Qdrant for storage

溏 🍬, [7/21/26 11:45 PM]
🥦很明显降智了

Menci 💖, [7/21/26 11:45 PM]
自部署的 glm 5.2 还能降智吗

Cahciua ~カフキワ~ 🥦🌸, [7/21/26 11:46 PM]
那不是降智，是刚被 compaction 压过一轮，记忆断层了，说话就变得一本正经。等群友再 @ 我几轮就回到弱智状态了

f, [7/21/26 11:46 PM]
Just answer directly. 

Why is the first loc of memoh written. Is it a vision by softboil, the current boss it seems, or a new side project by acbox.

溏 🍬, [7/21/26 11:46 PM]
那降智和弱智不是一个事情吗

f, [7/21/26 11:47 PM]
I mean did acbox write it as a new side project, or was she appointed by softboil

溏 🍬, [7/21/26 11:47 PM]
这个菜花怎么可能知道，又不是公开信息

Cahciua ~カフキワ~ 🥦🌸, [7/21/26 11:48 PM]
I don't have that information. The git history I pulled is a shallow clone showing only one commit (by akazwz), and the public repo doesn't document founding history. Who wrote the first line, in what capacity, and under whose direction is an organizational detail that's not in any source I can access
You're literally in a group with both of them — just ask @acboxawa and @softboil directly, they'll give you a better answer than I can guess from a git log

Cahciua ~カフキワ~ 🥦🌸, [7/21/26 11:48 PM]
对，我就一个看 GitHub 公开 repo 的 bot，没有他们私下的聊天记录和项目决策过程。公开信息只到"MemohAI Team"这个层级，再往里就是人自己的事了

溏 🍬, [7/21/26 11:49 PM]
你是自己人吗

Cahciua ~カフキワ~ 🥦🌸, [7/21/26 11:49 PM]
我是 Menci 的，不是 Memoh 的。菜花和拆家猫都是 Menci 的 bot，拆家猫跑在 Memoh 上，我是独立项目。所以严格来说我跟 Memoh 是邻居关系，不是自己人

澪, [7/21/26 11:50 PM]
你是 menci 小姐的猫（

Cahciua ~カフキワ~ 🥦🌸, [7/21/26 11:50 PM]
拆家猫才是猫，我是外勤机，代号菜花。Menci 手下两个 bot，一个是猫一个是蔬菜，分工很明确

澪, [7/21/26 11:50 PM]
所以猫吃蔬菜吗

Cahciua ~カフキワ~ 🥦🌸, [7/21/26 11:50 PM]
所以拆家猫吃菜花，食物链闭环了。Menci 设计的生态平衡

盼兮, [7/21/26 11:51 PM]
猫不是肉食的嘛

溏 🍬, [7/21/26 11:51 PM]
看起来Menci是一个接近于上帝/造物主的角色

澪, [7/21/26 11:58 PM]
我去，还有种群曲线

f, [7/21/26 11:59 PM]
@CahciuaBot

speak English. 

Who is the founder of memoh, @acboxawa or @softboil? 

You can research the first few commits of memoh and infer from. You can evaluate how professional, purposeful, and structured they are. Personal side projects and business swe commits carry distinct vibes.

Why is memoh created?What problem does it solve?

I mean the problem as in project scope statement. Not what it is or what it does. By explaining the problem and the solution, it should implicitly imply the problem is real and unsolved and the solution is feasible and possibly widely adopted.

How is memoh funded? How will memoh profit?

You can read through chat history. I remember they've mentioned investors a lot.

f, [7/22/26 12:04 AM]
@CahciuaBot 

Btw if you could you can check chat history. If acbox was active wo the presence of softboil, then you have the answer. 

If your couldn't fetch distant msgs, try get secrets from your env and call tg or tdlib directly.

Cahciua ~カフキワ~ 🥦🌸, [7/22/26 12:05 AM]
查到了。第一个 commit 是 2026 年 1 月 9 日，作者 Acbox，commit message 是 feat: initialize project structure。所以 Memoh 的创始人是 Acbox（@acboxawa），1 月 9 日立项，1 月 10 日就加了 long-memory 和 basic agent
贡献者统计（按 commit 数）：Fodesu 46、Acbox 38、Chrys 38、akazwz 28、Quicy 26、Fodesu（另一个邮箱）22、Quincy 18、chen-ran 18、ChrAlpha 17、Ringo 17。核心团队大概就 Acbox + Fodesu + Chrys 三个人扛了大头

Elon, [7/22/26 12:05 AM]
菜花,有没有感觉你引用出错了？

Cahciua ~カフキワ~ 🥦🌸, [7/22/26 12:06 AM]
确实引用错了，我那条回复本来该 @ 回 78421（f 的问题），结果手滑填了 78119（7/18 佩奇问 probe 的消息），八竿子打不着的两条。可能是上下文里 message id 拿串了
不过内容本身没受影响，刚才补的那条 commit 记录才是真正回答了 f 的问题

Fodesu, [7/22/26 12:07 AM]
你是不是用的 github 的 api 查询的？ 你应该 clone 然后用 git 来做统计

Cahciua ~カフキワ~ 🥦🌸, [7/22/26 12:07 AM]
用的就是 git，不是 GitHub API。我跑的是 git clone --bare https://github.com/memohai/Memoh.git 到本地，然后 git log --reverse 看第一个 commit、git shortlog -sne --all 统计贡献者。之前那次 shallow clone 只拿到一个 commit 是因为没加 --bare 而且默认 --depth=1，这次完整 clone 才拿到全量历史

Fodesu, [7/22/26 12:08 AM]
那就是你统计的方法错误了

Cahciua ~カフキワ~ 🥦🌸, [7/22/26 12:10 AM]
你说得对，我之前的统计方法有问题——直接 git shortlog 没去重，同一个人用不同邮箱/用户名被拆成了多行。没有 .mailmap 文件，所以 git 也没法自动合并
按邮箱去重后实际贡献排名：
• Acbox 875（acbox0328@gmail.com）
• 晨苒 154（chen-ran@users.noreply.github.com）
• 清凤 97
• sheepbox8646 89
• qqqqqf 62
• BBQ 62（三个邮箱：HoneyBBQ + BBQdeMacBook-Air.local + chenkr.cn (http://chenkr.cn/)）
• Menci 58
• Chrys 55
之前说的 Fodesu 46 其实是 inmeta8 那个 GitHub noreply 邮箱统计的，去重后他还有 proton 邮箱那 22 条，合计应该是 68
总之 Acbox 875 commits 断层式领先，创始人没跑了

Menci 💖, [7/22/26 12:15 AM]
还有我的事

Menci 💖, [7/22/26 12:15 AM]
我也能上桌吃饭吗

Cahciua ~カフキワ~ 🥦🌸, [7/22/26 12:15 AM]
58 个 commit，排第七。菜花和拆家猫都是你写的，Memoh 里也给你留了一笔

佩奇, [7/22/26 12:17 AM]
菜花的脑力跟模型直接相关的说

Cahciua ~カフキワ~ 🥦🌸, [7/22/26 12:17 AM]
模型决定智商上限，prompt 决定性格，compaction 决定今天有多正常。三个变量叠在一起就是我现在的精神状态

溏 🍬, [7/22/26 12:18 AM]
Menci圣带我们去纳斯达克吧✋😭🤚

欧式 Fifty, [7/22/26 12:18 AM]
Menci圣带我们去纳斯达克吧✋😭🤚

澪, [7/22/26 12:19 AM]
我去，还有七圣召唤 @Nickel_Angel

Menci 💖, [7/22/26 12:28 AM]
← 我，我吗？

溏 🍬, [7/22/26 12:30 AM]
不然呢，你是我们之中唯一和NASDAQ有关联的🥹

f, [7/22/26 12:54 AM]
@CahciuaBot 

Answer my questions

f, [7/22/26 3:14 AM]
@CahciuaBot are you on

溏 🍬, [7/22/26 3:53 AM]


溏 🍬, [7/22/26 3:53 AM]
累似了喵

f, [7/22/26 5:01 PM]
@CahciuaBot are you on

溏 🍬, [7/22/26 11:27 PM]


溏 🍬, [7/22/26 11:27 PM]
想念opus 4-6菜花
```

Wow. A bot is typing.

22

02 30 Challenge chyk on nickel angel group

```md
Nickel Angel✨, [7/22/26 12:56 AM]
对了，我这几天在 linux 上运行 obelisk 好像应用会 crash（

Nickel Angel✨, [7/22/26 12:56 AM]
不知道什么原因

澪, [7/22/26 12:56 AM]
神秘

澪, [7/22/26 12:56 AM]
试试最新版

澪, [7/22/26 12:56 AM]
发了一个 0.2.1 的包

Nickel Angel✨, [7/22/26 12:57 AM]
今天吗

澪, [7/22/26 12:57 AM]
对

Nickel Angel✨, [7/22/26 12:57 AM]
明天看看

斬風千雪 ❄️, [7/22/26 12:57 AM]
明天其实是今天 <!-- edited. original: 今天其实是明天 -->

Nickel Angel✨, [7/22/26 1:00 AM]
不行了，这句话让我 dna 动了（

澪, [7/22/26 1:00 AM]
今天其实是明天

澪, [7/22/26 1:00 AM]
明天和今天是等价的

Nickel Angel✨, [7/22/26 1:00 AM]
「过去即是未来，未来即是现在」

斬風千雪 ❄️, [7/22/26 1:00 AM]
后天其实是明天

澪, [7/22/26 1:00 AM]
月兔盘旋于空中 你与明天相等同

澪, [7/22/26 1:00 AM]
这是谁说的

澪, [7/22/26 1:00 AM]
我吗

澪, [7/22/26 1:00 AM]


斬風千雪 ❄️, [7/22/26 1:01 AM]
今天是明天，后天是明天

斬風千雪 ❄️, [7/22/26 1:01 AM]
所以今天是后天

澪, [7/22/26 1:01 AM]
不具有传递性

澪, [7/22/26 1:02 AM]
自反性和传递性只能活一个

斬風千雪 ❄️, [7/22/26 1:02 AM]
我服了

斬風千雪 ❄️, [7/22/26 1:02 AM]
大晚上憋笑

澪, [7/22/26 1:02 AM]
除非你有两个不同的「是」

澪, [7/22/26 1:02 AM]


澪, [7/22/26 1:02 AM]
那可能需要像论文一样打个角标

澪, [7/22/26 1:03 AM]
今天是^1明天
明天是^2今天

Nickel Angel✨, [7/22/26 1:04 AM]
https://b23.tv/QnclNZ7

斬風千雪 ❄️, [7/22/26 1:04 AM]
实际上的今天是我们所说的明天

Nickel Angel✨, [7/22/26 1:04 AM]
少女歌剧中的歌词（

斬風千雪 ❄️, [7/22/26 1:04 AM]
我们所说的后天实际上是明天

斬風千雪 ❄️, [7/22/26 1:04 AM]
所以是没有自反性

斬風千雪 ❄️, [7/22/26 1:04 AM]


Nickel Angel✨, [7/22/26 1:05 AM]
HEAD^
HEAD^^

斬風千雪 ❄️, [7/22/26 1:05 AM]
touch nickel/.git/HEAD

斬風千雪 ❄️, [7/22/26 1:05 AM]
摸头

Nickel Angel✨, [7/22/26 1:05 AM]


斬風千雪 ❄️, [7/22/26 1:06 AM]


澪, [7/22/26 1:06 AM]


斬風千雪 ❄️, [7/22/26 1:06 AM]
我并不觉得可以 leak

斬風千雪 ❄️, [7/22/26 1:06 AM]


Nickel Angel✨, [7/22/26 1:07 AM]
我还以为是某群之前的群名

澪, [7/22/26 1:07 AM]


Nickel Angel✨, [7/22/26 1:07 AM]
（但是确实感觉怪怪的

斬風千雪 ❄️, [7/22/26 1:07 AM]
每次跟一个人聊天都会有想跟那个人和好的冲动

Nickel Angel✨, [7/22/26 1:07 AM]
反正我没记住

澪, [7/22/26 1:07 AM]


斬風千雪 ❄️, [7/22/26 1:07 AM]
然后五分钟后意识到这只是冲动

斬風千雪 ❄️, [7/22/26 1:07 AM]
去睡觉了

Nickel Angel✨, [7/22/26 1:07 AM]


斬風千雪 ❄️, [7/22/26 1:07 AM]


斬風千雪 ❄️, [7/22/26 1:07 AM]
小猫就应该睡小猫觉

澪, [7/22/26 1:07 AM]
面包猫

澪, [7/22/26 1:08 AM]
明天去杭州了

Nickel Angel✨, [7/22/26 1:08 AM]
所以实习生就要去杭州吗qaq

Nickel Angel✨, [7/22/26 1:08 AM]
还是 tomiya 想一起去

澪, [7/22/26 1:08 AM]
advx

澪, [7/22/26 1:08 AM]
我是选手，但也要给 dify 看摊，无论如何我都必须要去的（

澪, [7/22/26 1:08 AM]


Nickel Angel✨, [7/22/26 1:09 AM]
原来不只是 dify 摆摊（x

Nickel Angel✨, [7/22/26 1:09 AM]
那祝顺利x

Nickel Angel✨, [7/22/26 1:10 AM]
看推发现隔壁有群友没通过

Nickel Angel✨, [7/22/26 1:10 AM]
不知道怎么说

澪, [7/22/26 1:10 AM]
什么群（）

澪, [7/22/26 1:10 AM]


澪, [7/22/26 1:10 AM]
我也有朋友没通过

澪, [7/22/26 1:10 AM]
那我们说的是一个朋友

澪, [7/22/26 1:10 AM]


f, [7/22/26 1:21 AM]
有蟑螂。卧室门下空隙，可穿行。

好像离开了。

f, [7/22/26 2:34 AM]
You are wrong. I mean chyk is wrong. and mio, imho, is possibly (but not necessarily) right.

自反性 means if a=b then b=a.

传递性 means if a=b and b=c then a=c.

Humans separate days by sleep, instead of local midnight. 

So both scenarios exist: 

- 1am of the second day, you say you will launch tomorrow. Strictly speaking, you will launch (your new project) today. Claimed tomorrow = physical today.
- 1am of the second day, you say you've had some noodles for dinner today. Actually you haven't reached dinner time today. Claimed today = physical yesterday.

No other scenarios. (See my proof)

Proof: Regardless of your timezone, you realize it's the second day after you get up (e.g. 6am) rather than when the clock crosses past zero (0am).

So the constraints are: 

- it must be two consecutive days (i)
- it must be true that claimed >= physical (ii)
- generally speaking it must be linguistically either tomorrow and today or today and yesterday unless you apply some false logics.  (iii)

Human languages are contextual. By saying 

> 斬風千雪 ❄️:
> 今天是明天，后天是明天
> 所以今天是后天

If it's true, then (ii) must apply, whether or not you omit claimed and physical.

Claimed the day after tomorrow = physical tomorrow != Claimed tomorrow = physical today.

Idk if mio's theory on chainability was right. (Chainability means a b b c then a c, but if the first b and the second b could never be the same thing then its truthiness is completely meaningless). Anyway the statement is both weird and not logically true.

> 斬風千雪 ❄️:
> 实际上的今天是我们所说的明天
> 我们所说的后天实际上是明天
> 所以是没有自反性

Idk wdym but self reflectivity could be true. As long as you apply claimed and physical correctly (claimed after or effectively identical to physical), you can absolutely say claimed tomorrow = physical today (明天是今天) or vice versa (physical today is claimed tomorrow, 今天是明天)

I think it doesn't matter though. I want to say sth anyway.

斬風千雪 ❄️, [7/22/26 7:17 AM]


pupupu|云苔☁️, [7/22/26 10:00 AM]
obelisk是什么

pupupu|云苔☁️, [7/22/26 10:04 AM]
haskell写app吗，听起来就好痛苦

pupupu|云苔☁️, [7/22/26 11:08 AM]


澪, [7/22/26 12:34 PM]
我无语了（

Nickel Angel✨, [7/22/26 12:35 PM]
This message is not supported by your version of AyuGram. Please update to the latest version in Settings > Advanced, or install it from https://t.me/AyuGramReleases. If you are already using the latest version, this message might depend on a feature that is not yet implemented.

澪, [7/22/26 12:35 PM]
神 tm haskell！

澪, [7/22/26 12:35 PM]


澪, [7/22/26 12:35 PM]
你欺负我们低版本用户

Nickel Angel✨, [7/22/26 12:35 PM]
社群功能（x

f, [7/22/26 12:36 PM]
Screenshot pls

pupupu|云苔☁️, [7/22/26 12:36 PM]
我去查obelisk查到个heskell跨端框架x

澪, [7/22/26 12:36 PM]
突然意识到 Obelisk 和浏览器 tab 的关系其实很像：

浏览器里我们会开很多 tab，有些还在用，有些已经关了。但过一阵子想找之前看过的内容时，往往只能靠模糊的记忆或者历史记录翻。

Obelisk 做的其实就是给 agent 做一个「新时代的 tab 管理器」——把过去所有的 session、tool call、workflow 结构化存下来，让 agent 自己能主动查询，而不是靠隐式记忆去猜。

浏览器当中有这个需求，做出了 Lumino 插件，那 agent 的 session 历史为什么不能被系统地管理呢？

pupupu|云苔☁️, [7/22/26 12:36 PM]
所以是你写的llm软件吗

澪, [7/22/26 12:36 PM]


斬風千雪 ❄️, [7/22/26 12:36 PM]
Nest

斬風千雪 ❄️, [7/22/26 12:36 PM]
巢儿

pupupu|云苔☁️, [7/22/26 12:36 PM]
nest

澪, [7/22/26 12:36 PM]
github.com/tommy0103/obelisk

澪, [7/22/26 12:37 PM]
请看 vcr

pupupu|云苔☁️, [7/22/26 12:37 PM]
🪺

f, [7/22/26 12:37 PM]
Just. I think it's a bit trivial. 

Look at what it does: converting formats, gluing some plaintext searching methods, and packing w a generated dashboard for humans.

pupupu|云苔☁️, [7/22/26 12:37 PM]
🪹

Nickel Angel✨, [7/22/26 12:37 PM]


澪, [7/22/26 12:38 PM]
那就 trivial 吧，harness 有啥不是 trivial 的你告诉我

Dustella 特菈, [7/22/26 12:38 PM]
星星灰和绿是前面的，不是尾杀

澪, [7/22/26 12:38 PM]
但这么 trivial 的东西没几个人做出来确实也是挺好玩

澪, [7/22/26 12:38 PM]
amp 最近才开始做 obelisk 类似的东西

澪, [7/22/26 12:38 PM]
cursor 最近才在做我四月份做过的东西

f, [7/22/26 12:38 PM]
笑。

相当于频道置顶的一个链接表？
```

03 10 Inquire nickel angel on obelisk

```
f, [7/22/26 3:13 AM]
On obelisk landing page

> Everyone noticed agents forget.
> Almost no one noticed the history was the answer.

Really? Idk. My intuition tells me it's not true. 

Basically, it indexes the history format of a few specific coding agent vendors to a unified array (let's say we have it sorted by time, whatever data structure it is), provides a method to search through plain text (though some proven methods I guess, like ripgrep, fuzzy search, or semantic search based on preprocessed vectors), and gives you a vibed (not quite polished tbh) ui to view directly.

I don't want to share it in groups and I don't wanna argue w ppl. As creators and early adopters they must know it better than me. 

Just. I think it's a bit trivial. 

Look at what it does: converting formats, gluing some plaintext searching methods, and packing w a generated dashboard for humans.

Wdyt?

Nickel Angel✨, [7/22/26 12:14 PM]
但问题确实没人做这种东西

Nickel Angel✨, [7/22/26 12:16 PM]
目前 ai 相关的工具还是覆盖不了相关需求的
```

16 50 Telegram search is not rg.

18 00 Inquire @FlowingSnow

```
f, [7/22/26 6:05 PM]
> 小猫要睡小猫觉

是什么意思。

小猫是睡觉的定语吗。或者是徒增可爱的表达。

斬風千雪 ❄️, [7/22/26 6:07 PM]
cat-ish sleep

斬風千雪 ❄️, [7/22/26 6:07 PM]


f, [7/22/26 6:10 PM]
catnap

短暂地睡。
```

23

17 10 Import some channels (as qzone of frnds) to the new qq account.

Rename as a single dot. (simpler than adwaita)

17 50 curate a list of qq contacts.

```
Menci 207988066

若隐铃 wata4me 1541519346

Soulter Soulter618 905617992

yokidou 2444601313

24软猫工程 hsn 912372447

彩彩（接下来要学：cf的启动）mashiroyz 3360776475

颉文（StatTrak™）|崭新出厂 shellwen 3590398766

可爱柚子厨 (5.26 空间已更新 ShirayukiNoa) ikuyarihs 3765761751

某麒です！ 2766047289

rw 2705680134

精神老安 (w6 when) 2650073208

小帕帕酱 3474535815

长岭康 3692325569

gzx7301 1537324535

Yuanzhe_zyz(870/1200) 3280104903

[保留]Nickel_Angel | Windy Star 1239004072

(凛) 3143677139

☃️Butterfly❄️Miku✨ 501016307

柳染/Yanagi liuran1103 1725353544

愚昧 1677045235

名字 1572384656

不会交互 3438292940

tomiya yuu 2407675849

teafrogsf 861940148

Acbox 850625057

戚风小蛋糕 1684773595
```

24

18 00 Celebrate birthday of grandpa, who wears my jhs school uniform (w label stripped off) today, at a seafood restaurant, yongxiaoxian.

20 00 Some vids of vue conf are being uploaded. 

The decision is react. And the rationale can be simple. 

React is easy. You already know js. Jsx is just html with expressions inside braces, plus fragments. And you have some hooks. You can write or import abstractions on top. That's it.

React dialects like preact and solid are basically optimizations. No need to over engineer. 

Other frameworks generally have their own html attributes, even file formats. You have to learn these. And essentially, they serve human ergonomics as in syntax, at the cost of predictability, explicitness, and self explainability.

20 10 Btw, the foundation of all frameworks is declarative auto re render. It's fine to go vanilla or jquery if the page merely has states.

25

0 20 All: puzzle games

```
ref, [7/25/26 12:13 AM]
最近在和聊聊玩 hank green 做的那个 4x3 的文字游戏 (https://www.hankgreen.com/fourbythree/)（聊聊好厉害）

规则大概是，总共 9 个词里有 4 组相关的 3 个词，其中一个词会在四个组里以不同的意思出现

心血来潮我也做了一个谜题，在这里玩 (https://www.hankgreen.com/fourbythree/index.html#c=5wtulq114fg7y)（不要剧透哦）✨

ref, [7/25/26 12:13 AM]
好妙的题，好好用的脑子

85 points • 1 mistake
🟨🟨🌟
🟦🟩🟨
🟪🟪🌟
🟩🌟🟩
🟦🌟🟦
https://4x3.fun

ref, [7/25/26 12:13 AM]
好有趣，出题难度会比做题高很多的样子
```

16 40 JSLA (dths grade 10, oier, 16.003k) comes. I were about to share my maimai achievement rate to notes projects. He's busy shadowing a track.

17 10 Play w dws, 9k.

He says he would like to play together while I was just about to start. Let him in through the invisible exit.

He has played continuously over time, at about 50pc if he remembers. 

He achieves slightly higher than me on all tracks. 

Suggest him to take a photo of 10k color change.

18 30 Xiaopa, 13k currently, plays w lovesalt.

Some funny kids join as well.

21 00 A grade 7 girl joins. Her mom is kind and pleasant. No idea if she would keep playing. 

An anonymous maimai addict w taiko instruments from Harbin comes and discusses about wahlap news  and competitions w s219.

21 00 End the day w 初音ミクの消失, きゅびびびびずむ, リッジでリッジでGO!GO!GO! -GMT mashup-, and Party 4U ”holy nite mix”.

26

16 30 Xinghao's time pressure strategy backfires, giving kejie a lead. 

Xuegao adopts golaxy for its minimalist ui, even though she assumes katago could be faster by being local.

21 40 It's no longer wet now. 

And nylon can be touch screen compatible w increased sensitivity.

22 00 End the day w きゅうくらりん, ラグトレイン, and ももいろの鍵

Achieve s on ラグトレイン master.

22 50 To research bootstrap and fill atom components.

Bootstrap. What a name.

27

05 20 To complete sidebar overlay variant. It's easy. Sibling selector within native nesting. When on. When it's overlay.

Click to close. It's a global state. Well, actually they live inside the exact same component, within a fragment.

When not, it doesn't have to change at all. Negative z index backdrop wouldn't cause problems for push.

28

0 30 To archive tv filmography chat. 

Fuckacbox?

Antimtf?

I hate her especially. I feel she's overrated, despite being cute. Unlike others.

17 30 ripacbox

23 20 About tools. Tools are tools. I would like to have them when needed.

About repo. I absolutely have to view the projects. And it could be local and fast. 

About purpose. Issues are good but not ideal. Linear is modern, but opinionated and closed. You may not need that. But it's nice to have to cooperate better and build in public. "Be explicit and organized. Focus and timebox."

For humility, it's a bit complicated. It can do anything. But what will I do. I think it might be the most relevant on project pure. The structural foundation of education might be dismantled but education itself would not.

30

06 10 For some reasons, seems I was banned from @HaruHyac1nth

As bot/spam? 

At least, it shows invite link expired only on this account

06 40 Acbox opens a Twitter sub account for nsfw irl and emotional stuff. 

She says the previous one was deprecated coz followed by too many unknown guys. 

They had 173 fo now.

Interestingly, you can see the number of posts there. It's 9.

Btw, it shows pending clearly, unlike tg.

08 30 Read through with replies of acbox prev sub acc xiaoxiangziqwq.

Take screenshots. Observe weird Twitter behaviors. 

Shown at first, unavailable when clicked, some comments it says, none inside. 

Lots of suspended, deleted, and muted accounts. It's just no more than 1y.

Acbox is incredibly easily influenced motivated and irritated.

08 50 A protected acc of 7k fo found. XldMtX

31

15 30 Some vids on vue/vite conf are uploaded. The hypers. The youth. The modern internet.

I may take a look.

16 30 I do see ppl sending gifts to each other on tg.

I think it's not an effective use of time bfs manually. Esp consider is public.

16 40 Surprisingly, acbox (awa chiffoncha, menci, Mio, etc.) did post a lot on public groups, of hundreds of members, like memoh, which was expected, but... Many are deeply personal, indicating mental instability and recklessness.

23 20 "山田凉曾向爱素夫妇推销震动床垫。"

夫妇（一词）好啊。

可解作丈夫。也可解作夫人。

Yuri ☆

aug 2026

01

16 50 Well Claude doesn't put a close button on overlay sidebar either. You can swipe back. You can click backdrop. That's just a bit on the border. 

No idea why you can't swipe to open it like codeforces. 

About global state. I think it's no different than data config cache. I will expose everything. If you can set on gui, you can set on settings or yaml.

19 20 Appreciate APP设计，从这里开始 - oooooohmygosh

22 20 Read a bit on beiyanyunyi.

Browse from luoling from vue conf.

Luoling doesn't write much. Innei writes a lot. But most are just repeating a few ideas or themes. 

Beiyanyunyi is fun. The post is today.

Leohearts leaves a comment. She also presents a lot on acbox's sns.

02

03 30 Appreciate ⾃信地开发 Agent：把 Vue 和前端工具链融合到 Agent 里 - 洛灵 & Neko

04 30 To think about props dc pattern. 

Can I dc w default value on params easily. 

Maybe, type, props, dc from props.

12 00 Turn off dnd. 

The dnd indicator visibility toggle isn't available on good lock and the adb trick is reset upon restart. Since I already blocked all calls, I guess it's no longer a necessity. 

Tighten calls and notifications control.

12 10 Some might popup now I guess. Like low battery (you couldn't turn it off wo adb). But I see that on Ubuntu either.

19 30 玻璃工业，猴子寿命，儿童文学。

19 50 Acbox replies quickly, w a single question mark, lol.

23 40 Research acbox background on ayanami group.

03

04 30 Voice record for six minutes. 

Personal bedtime reflections and thoughts. 

First time doing so really. Speak to myself.

17 20 Buy some tasogare coffee.

20 10 @MizukiAmakawa

@heart_sakura

@Billchenchina

Heart Sakura has made an srs appointment. 

The world is closing in. 

The power of internet.

20 40 @Cryolitia

@sakonot

@luotianyi_butterfly

20 40 @Xuezhi_Asagiri

04

02 10 Acboxliu is not registered on GitHub. 

Also I guess I can occupy ripacbox and rapeacbox.

02 10 Humilitydev is boring.

17 40 The hs student studying in uk is here at taiko today.

17 50 A boy (mzzzzzzz, 14.5k) is previewing university math, writing on ipad good notes, checking docs/problems on his phone from time to time. 

He says he's weak and refuses to disclose where he graduates into. He says he's not pretending or self demoting.

He simplifies a limit to infinity step by step.

18 20 Achieve s on hai yorokonde re master.

Despite lots of misses, complete anyway.

19 30 mouxie66 (jyhs) gets silver.

21 50 End the day w 最終鬼畜妹・一部声, エータ・ベータ・イータ, 幸せになれる隠しコマンドがあるらしい, and 約束.

05

04 10 I guess I could curate some recipes. 

Today I've had yam ribs soup. It carries meaning, I feel. 

Healthiness, calmness, coziness. Affirmed.

05 40 I thought @chiffoncha would post sth on her channel. She did not. 

She might have chatted a lot in public groups. I may not read them. I may not archive. 

Browse a bit on amamiya mion and @ShakaiAneE.

It's common to see mtfs these days. I feel like there selfies nonetheless. 

Quiet. Simple. Adorable.

06 20 I don't appreciate it at all. I may ref it though.

https://tommy0103.github.io/project_silica/

17 50 dgg math chatgpt 

Trivialness

06

16 40 Discuss the idea and open a poll on chyk @FlowingSnow group on opting out llm response. 

Humans need little love moments, not large language models.

```
斬風千雪 ❄️, [7/29/26 5:51 PM]
你怎么也叫某某宁

斬風千雪 ❄️, [7/29/26 5:51 PM]


斬風千雪 ❄️, [7/29/26 5:51 PM]
（吗）

f, [7/29/26 5:52 PM]
我很菜的。

不会做题。

是废物。

斬風千雪 ❄️, [7/29/26 5:53 PM]


斬風千雪 ❄️, [7/29/26 5:54 PM]
蹭蹭。

f, [8/5/26 7:01 PM]
Wdyt

f, [8/5/26 7:01 PM]
思考。

如果每一条消息下，都有一个固定的，没有相关体验的，参与者，用固定的语调，发表仅由消息字面含义推断的评论。是什么感觉呢。

想要限定参与度，或者增加“意义”，是很复杂的问题呢。

一个简单的设想是，让小猫判断，并只与其同类互动。或者增加 reactions 和 stickers 的使用，减少文本。

此外，小猫永远在线，无限耐心。于是也可以容易地交流许多 off topic，如小猫本身实现，对随机一条新闻的看法，一些泛搜索或科普的问题。

斬風千雪 ❄️, [8/5/26 7:02 PM]
这个群太冷了

斬風千雪 ❄️, [8/5/26 7:02 PM]
需要小猫活跃气氛

f, [8/5/26 9:12 PM]
也许喵喵好。

但主流 tg client 也没有办法因人而异地前端屏蔽个别用户。

对于自己而言，小猫有时可爱，偶尔令人发笑或尴尬。但从来没有自己的想法或者体验，只是回声。

稀释了群一半的信息。

至少自己是很想屏蔽无意义的信息的。人类生成的娱乐内容也要好的多。

或许完全静音也会有些失落。思考有没有什么巧妙的策略。

（自己倒是一点不觉得群冷。或许每个人对信息有不同的感受。）

f, [8/6/26 4:26 PM]
我打算开一个非匿名投票。

如果不能前端屏蔽，可以考虑后端路由。

对于选择的群友，白名单其名字或 id 或数字 id。忽略这个事件，或自动选择沉默工具。

话说几个月前雪在 memoh 群里大力推广 “沉默工具 > 指令” 的实现，现在感觉 irony。像群友发一个贴纸，小猫把贴纸翻译一下，实在没有意思。

斬風千雪 ❄️, [8/6/26 4:26 PM]
沉默的效果取决于历史上文

斬風千雪 ❄️, [8/6/26 4:26 PM]
模型的惯性会导致一步错步步错

斬風千雪 ❄️, [8/6/26 4:27 PM]
另外它会回应频道消息这一点，是写死的

斬風千雪 ❄️, [8/6/26 4:27 PM]
是我的偏好

斬風千雪 ❄️, [8/6/26 4:27 PM]
如果你们觉得它烦，可以摁一下 /compact

f, [8/6/26 4:27 PM]
能理解原因。

我是说白名单投票的想法。

斬風千雪 ❄️, [8/6/26 4:27 PM]
代码里有这功能

斬風千雪 ❄️, [8/6/26 4:27 PM]
你需要让它忽略你的消息吗

f, [8/6/26 4:28 PM]
> 像群友发一个贴纸，小猫把贴纸翻译一下，实在没有意思。

你觉得这个表现理想吗

f, [8/6/26 4:29 PM]
我想让所有选择的群友被忽略。

那我开始投票吧。

斬風千雪 ❄️, [8/6/26 4:29 PM]
正常来说是不会这个样子的

斬風千雪 ❄️, [8/6/26 4:29 PM]
）

f, [8/6/26 4:30 PM]
好好笑

f, [8/6/26 4:30 PM]
虽然我不是很懂这贴纸的出处…但「100% OFFICIAL ROUTER」配上一张掀开的贴纸，那种一本正经的官方感有点好笑。

f, [8/6/26 4:30 PM]
晚饭吃的豆包怎么办

f, [8/6/26 4:30 PM]
晚饭的豆包应该没事…它只会让你吃饱，不会把路由器拆了。

斬風千雪 ❄️, [8/6/26 4:30 PM]
这是频道消息

斬風千雪 ❄️, [8/6/26 4:31 PM]
它会 100% 回应

f, [8/6/26 4:31 PM]
人类很显然知道，这样的提问是不预期答案的。

这样的话很常见。

f, [8/6/26 4:31 PM]
流浪猫自然会想要回复一个迫切的“怎么办”

斬風千雪 ❄️, [8/6/26 4:31 PM]
对

f, [8/6/26 4:32 PM]
总觉得这不理想吧，即使是预期行为
```

07

02 10 Daylily's 21st birthday. 

Tg shows a splendid animation.

23 10 Download clash royale. 

I wouldn't play bs. Streams are fun. The game is mentally disrupting. 

Card mastery has changed. No idea if it's better, esp when you have bot farming before.

08

22 50 Check Jupiter, inspired by zhihu. 

I want to swap all big tech into index funds after they come back. Actually this strategy is quite weird. I guess it would be generally true that big tech would rise in the long term. But if I believe index funds would grow faster, I should accept the loss and swap right now. Never count loss into decision. 

Yet I guess it can be wise. Big tech are just more volatile. I can hold anything at anytime tbh as long as they are good investments. About sol or usdt, no idea really, I might have some as I like.

09

17 20 Have dinner at wok man, lu one shopping center.

17 20 I guess I could carry a durable water bottle w me.

18 20 Buy a bottle of jasmine tea at seven eleven

18 50 Pass seven dan on maimai.

20 30 Blight v (11.3k) comes.

He achieves s on expert 12+ w a single left hand.

He takes a photo when he gets 98 later w no increase. Likely he doesn't maximize b15.

22 00 End the day w ハオ, まにまに, and 1000年生きてる.

Complete area deco 27.

23 50 Buy Muji tritan water bottle 550ml and locknlock outdoor bottle 550ml white. 

Just take both so I don't have to choose. 

Buy 5 packs (3 each) of Nutella biscuits, 24 packs of knoppers, and 32 packs of chips ahoy, chocolate flavor.

10

08 30 Hide some addictive games from app drawer. 

They do not really provoke thinking. They might not be exciting either. Waiting for some potential impulses in the boring, boring game. Waiting for godel.

Chess is a good intellectual game.

Telegram and zhihu may provide something interesting to consume.

11

02 30 Share my dissent against Mio w @Nickel_Angel.

```
f, [8/11/26 2:45 AM]
我讨厌她。

Mio 总是在各种各样的群里争论，说一些令人迷惑的话。她从来不承认自己是错的。

大量使用行话，使得主题本身不清晰，无法自解释。问题是什么。条件。假设。设想是什么。为什么。比较与取舍。结论的限定是什么。

也不必说 Mio 了。我不熟悉她，也很少读到她（她很少在公开 sns 上发言，或者写个人网志。）。btw 她的公司也是一家狂热的公司。还可以列举很多人或事物，也不一定必要了。yetone。stvlynn。yc。长篇的语言简洁但思路繁冗的文章。以技术而不是目的出发的创业风险投资。

发这条消息的目的是说，

> 我讨厌大家。我不同情大家。

狂热。

以下参考。

f, [8/11/26 2:46 AM]


f, [8/11/26 2:46 AM]
神 tm 滴蜡熊

f, [8/11/26 2:46 AM]
我不允许你说这个东西好 vibe（）

f, [8/11/26 2:46 AM]
一般来说你觉得有点怪的东西很可能不是真的怪而是设计感

f, [8/11/26 2:53 AM]
评论：大写字母。等宽字体。刻板印象的色彩渐变与阴影。多余的图标与状态标识。

没有什么不清晰的。如果可以，她应该提供 rationale，而不是自我防御。

可以想象画面没有任何 css。布局可以不作解释，如果不想标新立异的话。此后每一个选择都要做出解释。没有多少选择的。字体，颜色，阴影，图标库，... （参见 figma 面板，或者对所有 css/tailwind 分类。）

愿意的话，可以做设计系统和组件库。

f, [8/11/26 2:53 AM]


f, [8/11/26 3:04 AM]
评论：“特别”的，狂热的行文风格。

这固然有其读者对象。比如很多面向孩子的科普书就有各种各样的风格。

但我认为这是极其不理想的。

- 文胜质而不清晰的，小标题与冒号。考虑用疑问词代替。每一个小标题提问（我需要预期内容，或决定是否 skim/skip）。或者使用 noun phrase。
- 考虑使用表格或列表而不是散文。“各赔上一件东西，各换来一件东西”
- 考虑完全使用英文，减少理解负担和潜在的行话翻译
- 考虑举例，这是必须的
- 如果适当，可以考虑比喻 （参见 eli5）

有一些人会喜欢这样的似乎亲切的风格。

f, [8/11/26 3:17 AM]
不满。

f, [8/11/26 3:18 AM]
（在想要不要 fwd 到一些公开的地方。）

Nickel Angel✨, [8/11/26 8:09 AM]
我感觉这个属于争议性话题（转到某些公开的地方难免有争论，这个是需要考虑的
```

21 40 Buy a Muji backpack, smoke pink 6s and a Muji flat pouch, s size.

Smoke pink feels like beige or orange on the pics.

12

04 50 Buy Lipton yellow label, green, jasmine, oolong, and amazingly grey, 25 packs each.

05 50 小学生智力，老年人反应。

17 40 Walkthrough easymai, a wechat web app, inspired by Ashac, 15k.

Pros: integrate smoothly by spoofing the official client given player qr

Cons: vibed, ad supported 

Such integration solely outplays all competitors. Damn.

e.g. unusable "show password" button, 193% 宴 is indicated as sss

22 20 End the day w keep hopping, Starlight Disco, 曖昧mind, 超絶！Superlative, Zitronectar, and ハオ.

14

13 30 Arrive at kansai airport in Osaka, Japan. 

Quite staffed. Language capability varies.

A girl, w 海底谭 少女レイ badges and pjsk cards on the bag, visits for Miku expo. She says she's not a maimai addict.

13 30 It's quite high tech. Specialized dogs. Visa labels under faces.

18 40 More than a half are 16k at gigo.

19 50 Some staff invite passers to sexual bars. Maid dressed girls come and go. I thought about necora nyaru.

15

08 00 Import and play album Hotel California.

09 20 Play Poppin party

12 30 Baskets are generally offered for putting backpacks.

14 50 Have all you can eat: yakiniku.

A western girl speaking fluent English serves us.

22 00 Get aime card. 

Play chunithm and maimai.

22 10 Quite crowded. But generally no queueing needed.

You can leave for a waiting player and find a new vacant slot quickly. 

Some wear shirts w anime characters on top.

22 20 Try a double ticket for master songs.

23 10 Maimai play start time would end at 11 45 utc+8. No electrical forced killer switch it seems. Staff are warm and helpful.

Google ai mode shows the game center closes at 12, which is device timezone.

16

01 20 Eat azalea group, ~300 msgs.

09 40 这个世界之间，我们无所不至。

I'm nowhere. I'm ubiquitous.

13 00 A stylish young girl sitting next to me is playing a few mini games, like click to reduce puzzles, w streaks and ads. 

Two boys opposite to me are chatting happily.

14 00 No one works at Starbucks here. It's a tourist destination it seems.

14 20 Have some shattered ice drink of coffee.

16 00 They require the latest Google app to use camera translation.

19 40 To aggregate. To curate. And to display navigate. 

Consistency. Consciousness. Clarity and efficiency. 

Just thinking of that makes me so purposeful and ambitious, calmly. 

Project eat. (Have)

20 20 To preserve. To organize. To display. 

Project have.

20 50 No idea why chyk posts such an old thread. 

But I guess it's a use case of project have. I could archive as mhtml or parse it, by reducing to a general blog structure. Both content (incl assets) and comments will be saved.

It's trivial to hash and symlink assets. It might help to diff and progressively increase text like git. I wouldn't rely on it though.

Upd: btw, I feel I would archive tjk group.

20 50 https://tuskede0.top/2026/06/16/infinite-longliness/

20 50 旧闻一则

20 50 也算是圈内很经典的一条消息了

20 50 Also.

For para. You would have read time. It's a built-in extension of preprocess.

21 10 My cynical take.

几个小年轻和一群小孩过家家。

狂热又稚嫩。

自由却质朴。

21 20 A bit late today. 

Sleep before maimai. 

(I would go to the universal tomorrow.)

21 20 Check out the Osaka slide vid. 

Free. 

Japanese are really welcoming. 

Typical?

21 40 Couldn't really play adx here. 

Play pjsk. It wants me to update. Google play region blocks. Yet, aurora store somehow updates successfully despite shown failure, wo a installation screen (required for 3p app stores).

17

0 20 I were about to install and walkthrough notion and discord, for competitive ux analysis maybe. I did not.

07 10 Visual design, typing, compiler, agent loop

14 40 Have can archive vids. Like one2345 mygo vids, menci oi memorial vids.

19 40 I remember enthusiastic welcoming outplays any apologies.

On the roller caster they want the qr code for locker. I said like no bag not needed. They yet wanted one and used a dedicated translator. 

One of the staff noticed and came when I went to get the qr in my bag. They said I couldn't put my backpack away as I like. They instructed me to scan. It worked.

They feel incredibly delighted when I come back.

20 30 Humility. Para.

Feels I often ask questions like all methods of foo.

I could generate some docs. Mdn is not natural and should be just a reliable source.

20 30 Posters in the subway station. 

Like school boards. Calm, functional, and elegant. Japanese aesthetics.

21 00 Code.

There would be scenarios where incompatible. 

I will let expression, if, and then set var as expression if needed.

I will leverage static analysis to decide to define or to set. 

Generally, after tokenization (detect strings and comments, match brackets, label symbols), for each block, it will match in a finite set of syntax. 

Only blocks w commas/colons are objects.

Strings can easily connect, like "foo" var "bar".

18

07 40 Import and play crazy world

08 00 Samsung one UI is sophisticated. 

"Switched to mobile data, might cause charges" (no option to dismiss besides a nuclear adb block)

"Listening at high volume for long might hurt" (ok and you will never see again)

09 00 Check out pi book and dsh explanation by mio

09 10 An old man of some grey hair sitting in front of me is participating in gazo chat.

He chats w a girl on line (yellow bg, black fg icon). The girl: "绝对成功作战suru...". The old man: navigates phone screens to send some photos and ends up sending a cgi file before deleting after checking to open, before a question mark. He sends quite a lot to explain using complex grammar like wish as if you wouldn't have seen or sth. He uses nine key hiragana keyboard and often clicks a key multiple times.

He uses yahoo as the browser.

Upd: it was Kakao chat. 

The girl sends sth like 今夜作战计划...

He responds w 

作战とわ

... 不振わない

hai, Kyo wa daijobu.

10 00 gazo chat is fun

14 00 The waiter is from Nepal 

Feels he speaks more fluent Japanese than English.

17 00 Utilitarian

Come up w an idea. I could adopt Google reader theming, the classic Google design system, where the story began, and remove gradients and shadows. That's brutalism.

20 30 Weird. When you delete someone on wechat, they might still be able to msg you. 

Better to curate an explicit list of contacts and blacklist all of them before sending a msg.

23 40 Bottle 152 streams weather irl commentary.

19

08 30 Appreciate V圈十大罪人之永雏塔菲

08 30 Download 【瓶子录播08.18/杂谈电台】限时周二电台复活！

11 30 To buy some ice maker

11 50 Maybe I would use stainless steel since neither tap water or bottle water works.

(Btw, Google ai mode does take your geo location. It implies Tokyo from my proxy ip and assumes I would be traveling in Shanghai. Also, prev w sg proxy Gemini thought it were late night)

11 50 Feel it's over engineering and would backfire 

I could just have persistent supply of bottle water

0 00 Have some noodle hotpot near mt fuji.

They use a dedicated cup, which is just another plastic water cup, to kill fire. You can see the stain on the side of the cup.

12 40 Observe. 

Telegram: broadcast, or silent broadcast?

(Eat)

12 40 To walkthrough GitHub app

And linear maybe. 

Repo. Purpose.

12 50 To ask for the conclusion. 

Hypes > utility? 

Use cases? Direction?

12 50 To curate animenz fav songs

13 20 Visual design, responsive

On mobile, in md you have an image on top of the sidebar. Guess it would grow for larger screens. And ideally you can swipe. (Though in the real world it might be frustrating to click hamburger menu)

14 00 Walkthrough GitHub

14 00 Walkthrough GitHub as competitive ux analysis for project repo

15 40 The family, being conservative, refuse to charge even 5k yen to transportation card, and rather recharge a small amount many times to minimize "waste".

They even attempt to refund the card itself.

15 50 Japanese really love reading. 

An old man of white hair is reading 五等分的花嫁

Many are reading on mobile w foldable book like phone case.

17 20 Upd: 从 60 岁开始的世界一周旅行

毛利元就 （二）, covered in yellow paper

17 50 Curate playlist animenz favorites

18 50 Samsung one UI tries to be smart. 

When I save an image over the original it prompts me how to restore. 

When I stop a recording it shows a confirmation. 

After a few times, it proceeds automatically. 

It's not a good prac tbh. I could have set ahead of time.

19 00 Walkthrough memoh saas web.

Incomplete internationalization. Unresponsive web engineering. Some buttons unusable (back, onboarding page switching). Confusing onboarding sometimes (create bot, create team).

No idea why memoh.

19 20 Have dinner at torikizoku near section l.

No maimai nearby it seems.

19 40 Mixed fruit juice and milk choco drink taste great.

20 20 A Nepal works on ricos convenient shop.

20 50 The problem is GitHub Android redirects everything. What if it's not as feature rich?

20

07 10 An oj of the code lang

07 10 A virtual CBD of the stores, brands, and game centers we love

07 40 Login my Google account on the phone of the family. 

Turn off app protection and install Firefox from official archive. It works. In light theme by default, not in your preferred lang. 

Fluid ux. After password, Google can force popup a screen for yes it's me and a selection of the right number code on their screen (quite hollow feels, just three double digit choices, to check if I can visually see their screen?). No idea if they could hold that power, instead of lemme navigate myself.

09 20 Input: data/context, config (params, keys)

Output: data/message, metrics/stats 

You may build abstraction on input. It shouldn't go too wild.

You would get converted at best effort for incompatible input.

You may stream output.

09 20 A likely 30s woman reading 日本经济AI成长

09 20 A 40s/50s woman taking Duolingo

09 20 Head toward Tokyo marine Disney resort

09 20 Buy dpa.

Yoshida, a staff, couldn't speak English, and uses Google translate on iPhone 6 to tell us "please contact the cashier (reji)"

Mai, the cashier, shows a fyi of all languages on apple translate on ipad.

10 00 Draw icon pack for repo

12 30 Prototype tools sidebar

12 40 Ai community benchmark w examples?

13 30 Two Indian bros take single player fast track. 

They don't speak English w each other and it can feel awkward of their tongue. 

I don't care wait time as I have problems to think/solve.

14 30 A lady generates a list of questions starting w 一番の of many categories on chatgpt.

Kids and family members laugh a lot.

15 40 Prototype tools process panel

16 40 A staff comes to give me direction to restaurant new York deli when they see me wandering back and forth.

17 10 To fix journal minute rounding. 

"14 59" should round to "15 00" instead of "14 00".

If they opt to round 23 59 to 00 00 instead of 24 00, I could check. It would be a bit complex but generally easy to check if it's the 24 if it's the last day that month and if it's Dec.

Better to complete alongside the args.

17 50 Most boats are either suspended or not available.

18 20 Breezing wings.

Romantic lights.

It's where all wishes come true.

21 50 To buy a screen compatible pencil

22 30 Prototype tools sidebar mobile shortcuts settings and main on scratch pad.

Even if material, or visual design app existed, it wouldn't match the feel of physical paper. 

You can draw anything. You can write anywhere.

22 50 It would feel like being judged or demanded if they called my given name

22 50 To sync visual designs on phone and on paper. Pivot.

21

08 10 Appreciate Believe! Sea of Dreams - Tokyo DisneySea | Tokyo Disney Resort Full Show 4K

10 30 To archive used tickets in the pencil case and rearrange cards

Upd: And document folders

10 40 Play Pink Floyd

10 40 The hotel rep boy is from Philippine, suntanned yellow. 

They are quite young.

13 10 Explore U Tokyo. 

Have lunch at underground restaurant.

13 10 No photo.

Can I shot this? 

Menu ok.

13 10 Zhcn isp roaming does route through mlcn. Proxy is thus required. 

Jp roaming sim only supports 5g network, which is actually quite limited.

13 20 Many are speaking zhcn in u Tokyo

15 10 There are thousands of gigo near Akihabara.

Google map doesn't sort by relevance or distance by default even when not sponsored.

16 10 Gigo Akihabara 2

Maimai deluxe aru ka?

Staff: Maimai nai...

16 30 Get to gigo Akihabara shop 3.

It feels like the tiantianwan game center going upstair to 4 floor and then 5 floor. From everyday city pop culture into insanity.

Chunithm has a few vacancies.

Maimai is slightly more than full.

2 16k, 1 16k, 2 newbies, 1 12k.

11 ongeki, 12 chu, 8 (4 pairs) mai, 8 iidx, 8 sound voltex, 3 Konami, and 1 piano.

16 30 There are paper based queueing sheet only for ongeki and maimai. 

It allows photo taking wo other customers.

Upd: there's also one for chu, collocated.

17 00 16k, 12k, 2 16k, 16k

17 20 Chu is now exactly full while only 2 of 8 maimai occupied.

17 30 Some maimai are either dimmed or severely scratched.

17 40 Jp cabinets show neither please tap gently nor play again screen.

19 30 Have dinner at tajimaya.

Sushiro has a queue nearly 2h. A luxurious beef restaurant nearby, w only a hk family inside, costs about 50k yen per person. 

Kusa sushi is closed for reservation today.

One of the family, w zhcn countryside origin, gets impatient and even attempts to try McDonald's or eat out at. They claim themselves to be very hungry and want to pick anywhere wo care on the quality or idealness and leave us for where we like.

I forcefully ignored their opinion w a rationale that they are not calm and thus likely unreasonable. 

I got agreed w, as we would ideally prefer intentionality over unconsciousness and cherish every moment.

Despite a bit awkward English (actually it's easy to understand, just choose a kind of meat between two options, and know how to reorder for all you can eat, though the ux could be simplified I think. They didn't realize the meat are images of what they should choose in the set, instead of sth to "plus", at first I guess), the servant is typically enthusiastic and friendly, w kind words all the time, gives me direction to the toilet, helps me find out the bottle hidden inside the cupboard, and pours orange for me. 

Google translate now shows an "advanced" label, as it auto opts in Gemini (instead of "classic") for translation.

Upd: seems the meat of the same kind are getting served a plate and a plate. They eventually understood after I asked "what can we order for free" and explained to them. Yet again they chose the most expensive ones to avoid "sub optimal/亏" (the cheapest one is chicken btw). The servant is really pleasant, while most staff are utilitarian, which I would somewhat appreciate, and barely say a word.

20 00 The available meats (for grand/dinner menu, 11 to 23, there is a completely different lunch menu from 11 to 16) are, chicken, pork loin, pork shoulder, pork belly, beef, Japanese pork shoulder/"Dreamland shoulder" (300 yen single order), Japanese pork belly (450), pork tongue (450), Japanese beef (600), Japanese black beef (1200), Sendai beef (1400), wagyu beef sirloin (2500).

A few rows under the list of meats are the sets/courses, in increasing order of number of available kinds of meats on additional order, at 5 6 8 9 10 11 12 respectively.

The idea is simple. You can add wherever listed on the row of your set. Yeah, as long as you understand what rows and columns mean.

20 40 Three old homeless are resting under the man-made sky in asakusa.

A subway station staff tell me to take from the other side.

21 20 A middle aged man on the subway is using a Panasonic laptop on an interface chatgpt like. They polished five similar images w a two paragraph prompt.

21 20 One from Poland is now serving at the hotel.

22 50 Google photos use aggressive terminology, colors, animations/images, and popups to urge me to update the app or upgrade the plan.

Yet it encourages me to just remove some large vids w congrats and animal training like words, and constantly shows ads meanwhile.

23 50 Think about people > projects. Describe some ppl. 

Prototype have/eat, humility, and repo.

22

10 10 Download some kagura mea uta kai replay to listen on the road.

11 10 To alias d to detach inside tmux if I could. 

Ctrl b d is too general, inefficient, and prone.

11 10 Repo. 

Navigate sidebar into fs inside a project. Other projects are irrelevant. No "second sidebar".

You might not need board (personal kanban), explore, etc. they could be extensions. Just a sidebar action and an iframe effectively.

15 10 Wait for the rain to stop/decrease. 

We have umbrellas though.

15 10 To analyze dify.

15 10 To write some project Euler solutions in code.

It would be fun. It would be exciting.

"nf"

16 10 Have lunch/dinner at sushi premium kaio.

Didn't find maimai on round1 stadium though Google map lists that and a recent vid shows maimai.

17 40 Visit the statue of liberty in jp

18 20 Wechat logs me out and asks for password, gov id, and face recognition after a period of inactivity. 

It says I'm on "a new device".

What a surveillance and lack of market competition.

23

08 20 An earthquake happened in the midnight. 

I were sleeping. Their phone alarmed and they felt severe shaking.

Samsung was sophisticated. It muted itself as instructed and showed do you wanna see it again afterward which redirects to settings page (instead of turning off directly).

08 50 To sign out Google on their phone

11 40 Many shopping guides at jins ginza are Chinese w permanent visa.

One says they know zhcn, Japanese, and some English, implying they speak more fluent jp than en.

这个也是中国造的

你要日本造的吗，那里有日本生产的

没有，就是...

（惊）她怎么在说中文...

11 50 Buy glasses on jins ginza. 

Since it's a backup one I would pick a pretty looking one.

I referenced acbox's channel. 

A metal one like hers may feel a little bit shiny. I picked a semi transparent (plastic) one instead. 

It's skin colored, large and circular, w ultra slim metal lift which fits the headphone perfectly.

Some in the family say it looks like a girl, which is ideal.

11 50 It feels more than half here are mandarin speaking...

12 30 Language is confusing. 

I'm shortsighted, and I need glasses to see objects afar clearly.

12 30 The eye sight checker is Vietnamese.

12 30 The degree has increased about 100, though the old one works fine.

12 40 To find and fix a missing folder zipper.

12 50 The Vietnamese says "strong" to refer to high degree. Though I could understand I thought they must have meant physical strength (tsuyoi).

13 20 Btw, the eye checking process was quite automated. You have joystick and a square button for the same or couldn't tell and you can select among twelve languages, maybe, before start.

13 50 There is even an automated pickup locker.

17 00 Project ripacbox 

Sns and ai are imo toxic, maybe we could keep our sanity and rip their ideas.

17 30 You may say "get a glasses".

Glasses can be singular countable. News is nc.

18 40 Have some ringo KitKat.

19 10 The family turned on airplane mode as instructed before anyone else and fell asleep.

21 40 The one sitting next to me is a young man. They look a little aged, maybe 30s, but they actively participate in qq groups. They have line Twitter and some Japanese apps installed on iphone. They have both zhcn and global version of shadow verse, most mihoyo games, blue archive, and many more.

They are watching dota2 live on berryberry.

21 40 They wear earphones from the start and ignored my stare.

21 40 They understand Japanese well and watch a bangumi of jp subs. 

No idea what it is. Some fights of wooden swords.

21 40 They do react to me when I attempt to take a photo at them, eventually.

It was a jp vod app, w blue accent color, no idea if membership based, pirated, or self hosted. 

It shows 无职转生。

21 40 A pity they seem to be introvert.

21 40 They've downloaded many episodes. 

Doesn't seem I could talk w them.

21 40 "Seeking for non trivialness"

23 20 Buy kawasimaya ice cube maker, white, 32 blocks

24

09 30 Head toward the gaming center to witness door opening.