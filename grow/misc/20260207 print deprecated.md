现在 10x 工程师这种词有点通货膨胀。
以前吹牛也就 10x，现在 100x 工程师都出来了。
毕竟现在狂用新工具的话理论上确实可以做到字面产出上的几百倍。

于是现在某些时髦公司直接明写我们要招高效能人才，100x 工程师。
委婉一点的就写我们要找同时指挥多个 agent 干活的。

按现在这样的工具膨胀速度，可见以后招聘要求可能像这样

- 招聘一位 10^7 x 工程师，能同时指挥一百万位人工智能工程师干活

---

今天尝试用 Claude Code 写了些 webgpu/webgl 的代码，不出意外，用的 4.1 模型花了快一百刀了其实，跑也跑不起来，不是黑屏就是各种 runtime error。
我觉得 LLM 只能从日志里面读信息还是远远不够的，没有得到视觉的反馈和运行时的信息还是强差人意

---

By popular request: you can now branch conversations in ChatGPT, letting you more easily explore different directions without losing your original thread.

Available now to logged-in users on web.

very requested feature!

---

我决定不买房、不结婚、不要孩子，并不是因为广义上认为的大环境不好，而是我知道：

只要我没有这一切累赘，我可以在任意时刻重启我的人生、决定成为怎样的人。

这个诱惑力是巨大的。

---

Nope, I didnt lie :)

If you want here's the prompt I put:
make a website that's a landing page for a shoe brand with slick animations and shoe style layouts with very cool clicks, and the design of the website should just be flexing with animations!

I did GPT to make it better

---

设计并创建一个类似 Windows 操作系统的 Web OS，具备完整功能：从文本编辑器、带 Python 的终端、代码编辑器、可玩的游戏，到文件管理器、画图工具、视频编辑器，以及所有重要的 Windows 系统预装软件。可以使用任意库来实现，但务必确保我能把所有代码粘贴进单个 HTML 文件里，并直接在 Chrome 中打开运行。让整体效果有趣、细节丰富，呈现出超出常人预期的细节，在一个代码块中尽情发挥创意与美感。

---

Telegram has implemented strict rate limiting for third-party clients, especially when using VPNs or virtual phone numbers. If you are experiencing issues such as “Connecting…” or “Updating…”, try turning off your VPN and using a physical phone number, purchasing Telegram Premium may also help.

---

不好意思开个炮。

Android 之魂早已烟消云散。

作为一个整个初中都在玩 Android、写 Android 系统优化 App 的人，我对此很有发言权。以前我们对 Android 和 Google 的开放性是很向往的，也常以 "don't be evil" 作为座右铭，并且将 Google 的闭源 GMS 视为 Android 最重要的一部分，等等。当然，这也是我自己一段充实且精彩的青春；尽管 Android 对于我而言早已走进了坟墓，这段经历仍然值得怀念。

曾经那群人自称为 “搞机玩家”，他们热衷于给自己的手机刷上千奇百怪的 ROM、体验各种好玩的 Xposed 插件。从第一次看到 CyanogenMod 的开机动画到含泪迎接 LineageOS，从唾骂魔趣的收费 ROM 到安装大杂烩 Resurrection Remix，从 WeChatUnrecalled 到微 X 模块，从经典老牌 Nova Launcher 到后来的 Lawnchair，从大家都用的 SuperSU 到 Magisk，数不胜数。那个时代的 Android 是混乱的，也是多彩和自由的。

国产系统 ADUI 的系统级广告推送、XMPushService 的胡乱启动、拍照广播的自动唤醒、友盟广告的持久化 ID，都成为了这一代玩家心中的梦魇。于是，一群开发者开始在这个自由的平台上尽情舞蹈，让 Android 变得更加干净的同时也增加了玩机的乐趣。绿色守护、阻止运行、MyAndroidTools、冰箱、SDMaid 几乎成了那个时代的标配。后来，我们又有了 AppOps、存储重定向、Shizuku。很幸运，我也是这些开发者中的一员，做过一些微小的工作。

曾经有人说 “Android 那样 broken by design 就真的好吗？” 的确，需要用户手动使用 Root 权限来让手机不发热确实是历史的局限性。随着 Android 的发展，很多系统工具都走入了历史。时代变了嘛，不是任何人的错，只是留下了很多值得回头看的记忆罢了。然而，Google 做的还远不止 “优化 Android”，而是将它慢慢推向封闭的坟墓。

Android 不再需要 Root 了。2019 年的时候，我就通过和一些优化 App 开发者的沟通中了解到，他们的 App 在被 Google Play 反复无厘头地下架，原因都是诸如 “可能对设备有害” 云云。我不知道 Google Play 下架这些软件的真实目的是什么，但如果我们做一个最坏的推测，那么或许是 Android 已经不需要这些 App 来优化了吧。同时，随着系统权限和 Google Play 的越发收紧，越来越多曾经无需 Root 的自定义工具也变得举步维艰，而 Termux 便是最好的证明。只可惜，他们成为了 “整顿生态” 路上无辜的牺牲品。

开源？难说。往 AOSP 中增加私有的 Google API 早已屡见不鲜。Android Pie 发布时，Android 引入了一个 Digital Wellbeing 的功能。通过阅读系统源码得知，AOSP Framework 中新增了很多专门为 Digital Wellbeing 使用的 API 和权限。这些 API 都不公开，也没有文档记载（除了 Javadoc 以外）。他们生来就是为 Digital Wellbeing 量身定制的。而 Google 也将 Digital Wellbeing 打造为一个 Android 9 的 “新功能”。然而，它真的是 Android 的功能吗？恐怕不是。它只是闭源的 GMS 中的一个组件，需要厂商和 Google 签署合同才能植入，且完全属于 Google 所有，并不是 AOSP 的组件。

左手开放，右手封闭。还有 SafetyNet，曾经它只局限于 Android Pay 等银行软件，也很容易隐藏；而在 2025 年，Play Integrity 被无限扩大：不光用户往往需要借助泄漏的私钥来勉强通过验证，更有越来越多的银行、影视、游戏等软件开始借助 Play Integrity 确保用户没有 Root 他们的设备。这里我们不禁要问：用户购买了手机，为什么不能 Root 呢？Google 一边说 Android 是 “开放” 的，一边大力推广 Play Integrity，究竟是开放在哪了呢？

以安全为名，夹缝中求生存。2019 的时候和一位资深 Android 开发者聊天，其表示 Google 显然不会自己禁止解锁 Bootloader，因为将解锁用户夹死是厂商的利益所在。现在看来，这些话千真万确。在 Android 设备厂商和 SafetyNet 的双重驱使下，解锁 Bootloader 变得越来越不可能。曾经到手就能解锁的小米已经玩起了跑酷，就连之前自带 CyanogenOS、被誉为刷机小王子的 OnePlus 也开始了解锁认证；同时，越来越多的用户放弃在 Android 上运行银行和游戏等 App，也有一些用户开始尝试更多更复杂的 Root 隐藏方案。当然也有我，从 2019 开始就没有换过手中的 OnePlus 7 Pro、从 2021 就再也没有安装过 GMS 了。

压死骆驼的最后一根稻草。2025 年中旬，Google 宣布 2026 年 9 月开始，用户自行安装 APK 需要开发者前往 Google 实名认证，否则拒绝用户安装。2025 年中下旬，Android 16 发布，而发布 10 多天后 AOSP 源代码仍然没有公开，反而以 NDA 的方式分享给了手机厂商进行二创。我想，作为一个从 2016 一路走来，为 Android 的发展做出过微小贡献的我，此时千言万语都已经难以表达心中的失望了吧。

未来真的可期吗？或许在 Google 的眼中，Android 的未来是光明的。它摆脱了各种流氓软件的群魔乱舞，不再需要用户来 Root，有着不少的用户和无数的开发商为其平台开发软件，可以继续和 iOS 竞争。或许在 Google 的眼中，Android 的自由程度丝毫不逊当年。用户仍然可以将系统配色由绿色改为粉色，仍然可以不用 Google 签名就开发调试 App，仍然可以更改桌面布局，仍然可以新建来宾用户，甚至开发者可以更加稳定地信任这个平台、通过 Play Integrity 确保设备没有被他们的主人非法篡改。也或许，在 Google 的眼中，Android 仍然是非常开放的。仍然会有无数手机厂商对这个市场趋之若鹜，从 Google 那里签署 NDA 获得 Android "Open Source" Project 的源码并进行二创然后添加第三方功能，为市面上增加一个新的手机型号，继续维持这份开放包容和谐的生态环境；第二年 Google 还可以 “整顿市场” 为名将好用的第三方功能收入麾下，成为 Android "Open Source" Project 的一部分。未来是多么可期？

只可惜，在我看来，Android 之魂，随着那段青春一起，早已烟消云散。

---

Now that a few days have passed since I've owned this phone, I can come to a really clear conclusion that iOS is not really made for me. The device itself may be, but the software is way too limiting under some aspects. I've been trying to use my iPhone like an Android device, and I feel like it's just not entirely possible.

I have noticed this when I first tried to play music. I was enthusiastic due to how cool gimmicks like the media player on the lock screen and the Dynamic Island looked like. My enthusiasm began to disappear once I realized that there is no exact way to reproduce my very own library.

To be fair, I do use some of my friends’ Navidrome instances. This makes listening to "niche" music on-demand way easier than it is locally, but I still tend to prefer having my own library with my own section of music from different artists.

For Navidrome, there actually are some clients (quite a few of them), and some are even exceptional. But the same cannot be said for reproducing my own library, locally. I have not thought about this at first, but it became an issue when I realized I had to switch back-and-forth to listen to an album or another.

There are two issues that originate from this need: there's no way to move music from your computer to your iPhone, and there’s no (good) music player for iOS. The only ones I found were either outdated, or paid. Most of the times, such were also not that worth the money, and others were too experimental for me to trust.

I stand by the philosophy that if I have to pay for something (digital), it at least has got be good. I prefer trying the product first for then donating or buying it, but the way these applications ask for money is oppressive. This concept behind "gaining money" is present further in basically any other iOS applications.

Though, one has to understand the different costs developers cater when publishing an application to the App Store. Apple requires you to use one of their devices to develop your application, ask for money to publish it and for the license to do so.

But this becomes harsh towards the consumers, sometimes. For instance, Swiftgram, probably one of the only decent Telegram clients, has a monthly subscription for just a few features. Outplayer, a good-looking video player based off mpv, has an “Advanced” plan, just for… subtitles customization?

It’s totally fair to ask money for good products (and only when this statement is true), but I also believe that developers feel possible of asking users to pay a set amount of money just because "they own an iPhone". This might be a crazy assumption, but the high price makes me think so.

And honestly, they got a point. I was stupid enough to buy an iPhone with the mindset of "saving money", when in reality such a concept is immediately destroyed the moment I clicked “Pay now” on my order for a 979,99€ device.

After all, iPhone is a device that "just works", but the moment you try to do something not the way Apple intended, everything goes against you. Even though this device works perfectly for what a phone was made for, it also makes harder to own the content of your phone.

To enforce this concept, Apple tries to save nearly everything on iCloud, even when downloading something on your browser. Then, once you exceed the five gigabytes limit, they begin to propose a ridiculous plan for only one euro a month. Add this to your favorite streaming platform, Apple TV, everything else...

Android, on the other hand, is probably a more relaxed platform, although it is becoming stricter. This may also be because of the not-so high costs, and because not all people with an Android device are automatically wealthy.

I used to praise iOS and its applications, third-party or not, because they all looked good in picture, but once you start to realize more about them, it's hard to justify Apple's work. Maybe, inconsistent interface is a great compromise for a good experience.

---

I do realize that five days are not enough to fully judge a device, but my first impressions are neither good or bad, but mediocre at best. Picking up what I’ve mentioned at the end of this message, it’s not worth the money.

I feel like no phone is not worth such price point, as none of them are better than the other. No matter how much you spend and which manufacturer you pick, they’re all going to turn out to be a simple piece of slab.

The necessity of finding the best phone is something that is born from having too much free time. I know people who are happy with a bad mid-range and yet not make a fuss about it, as they don’t use their phone as much as I (and any enthusiast) do.

The do no care about what they buy and end up with. After all, every phone gets the job done, and it’s useless to find one that does it better than the others. The iPhone is not any better: it may look good, but functionally wise it’s the same as my previous phone.

At this point, with the money I have spent, it would have been best to spend them individually on what I want from a phone (e.g. a camera for photography, or a portable console for gaming). The concept of “having them in one device” is surely cool, but hardly achieved in a good manner (and possibly never will be).

I feel like the hype of iPhone and overselling it as the “device intended by God” is a statement made by people who do not even use their phone properly and are blinded by ignorance. They probably do not even know the basic of photography, how a good software is, what a great speaker is, but still say their phone is the best.

For me, the moral of the story is that you could buy any phone, at any price, and still be happy with it. The only limitation is you, and not the device per-se. I am not saying that thinking with your wallet is a great idea, but rather to not overthink too much.

Rather than nitpicking, maybe something I should do is picking randomly and force myself to like the device, without knowing more about it. That’s probably way better than doing hundred of researches, and ending up with delusion after dealing with the product, because that’s the reality I’ve been living on so far.
