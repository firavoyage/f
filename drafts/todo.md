todo

<!-- leverage thinking. -->

---

journal:

~~the magic move.~~

design api: proceed as long as safe (what's safe... like not irreversible), let frontend take the responsibility.

ui. clarity (simple). write. (how to be elegant. "web games often lack. vibe coded apps often lack.")

---

carte:

game design.

gameplay.

ideas.

clarity.

---

carte: a build step or not

---

creating an app called journal on ubuntu.

it autostarts, runs in the background, and watching the user.

it knows all the opened apps, the title of the app on the top, and the screen.

it tracks any change of the title of the app on the top, takes screenshot regularly (at an interval of certain several minutes, or when context switching), and keep them properly.

it has an web ui on localhost, like a calendar, or a timeline.

it could export the data to plain text and integrate with llms to analyze.

although idk much about tech, ive consulted pros and made some decisions (possibly changed now).

- prefer boring tech
- python, sqlite, and flask
- polling to notice changes
- one process for both watching and web server
- utc with timezone for time handling
- plain text file for logging
- a small json config file for screenshot interval, data directory, port number, etc.
- python standard library
- xdotool (called via subprocess) to get active window ID and title, wmctrl (optional backup)
- scrot (called via subprocess) for screenshots

my main table called journal in the imagination (possibly changed).

- id (integer, primary key)
- time (string, timezone-aware ISO-8601 using the local timezone offset)
- app (text, the app name)
- title (text, the window title)
- event (text, type of the event) examples: focus_change, interval_capture
- screenshot (text, nullable, the path of the screenshot)

my folder layout in the imagination (possibly changed).

```
journal/
  app.py
  config.json

  data/
    journal.db
    logs/
      journal.log

  screenshots/
    2025/
      01/
        01/
          12-00-00.png
          12-05-00.png

  pages/
    journal.html

  sources/
    style.css
```

my config file shape in the imagination (possibly changed).

```
screenshot interval (seconds): default 300

poll interval (seconds): default 1

data directory path: data

screenshot directory path: screenshots

web port: 5000

log level: verbose by default
```

my current progress.

- gnome extension logging window info on ubuntu (wayland).
- watch window
- store and log
- watch screenshot (deprecated for not feasible on wayland)
- serve the web page using a blank html
- add favicon to the page, and fit the browser theme (light/dark)

my current folder layout.

```
fira@Fira ~/Documents/f/journal
 % tree
.
├── app.py
├── clock.py
├── config.json
├── config.py
├── data
│   ├── journal.db
│   └── logs
│       └── journal.log
├── db_viewer.py
├── log.py
├── models.py
├── pages
│   └── journal.html
├── __pycache__
│   ├── clock.cpython-312.pyc
│   ├── config.cpython-312.pyc
│   ├── log.cpython-312.pyc
│   ├── models.cpython-312.pyc
│   ├── screenshot.cpython-312.pyc
│   ├── store.cpython-312.pyc
│   ├── watcher.cpython-312.pyc
│   ├── web.cpython-312.pyc
│   └── window.cpython-312.pyc
├── read_cache.py
├── readme.md
├── resources
│   ├── assets
│   │   ├── journal editable.svg
│   │   ├── journal favicon.png
│   │   ├── journal light editable.svg
│   │   ├── journal light favicon.png
│   │   ├── journal light.svg
│   │   └── journal.svg
│   ├── gnome-extension
│   │   ├── extension.js
│   │   └── metadata.json
│   └── systemd
│       └── journal.service
├── run.sh
├── screenshot.py
├── snapshot_to_db.py
├── store.py
├── test_snapshot.py
├── watcher.py
├── web.py
└── window.py
```

now design/define the backend api.

give the responsibility fully, yes fully, to the frontend side.

i mean, it could run anything, sending a string of sql for example, to the backend.

the backends just proceed if safe.

safe: predictable, permissioned, reversible.

some code maybe related. feel free to ask for more.

```py
# app.py
from pathlib import Path
from config import Config
from watcher import Watcher
from web import start_in_background


def main():
    cfg = Config(Path("config.json"))

    # start web server quietly
    start_in_background(cfg.web_port)

    # start watcher (main loop)
    watcher = Watcher(cfg)
    watcher.run_forever()


if __name__ == "__main__":
    main()
```

```py
# store.py
import sqlite3
from pathlib import Path
from typing import Optional

from models import WindowState
from clock import now_local_iso

class JournalStore:
    """
    Small SQLite wrapper. Keeps operations explicit and synchronous.
    """

    def __init__(self, db_path: Path):
        self.db_path = db_path
        self.conn = sqlite3.connect(str(db_path), timeout=10, check_same_thread=False)
        self._init_schema()

    def _init_schema(self) -> None:
        self.conn.execute(
            """
            CREATE TABLE IF NOT EXISTS journal (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                time TEXT NOT NULL,
                app TEXT NOT NULL,
                title TEXT NOT NULL,
                event TEXT NOT NULL,
                screenshot TEXT
            )
            """
        )
        self.conn.commit()

    def record(self, state: Optional[WindowState], event: str, screenshot: Optional[str] = None) -> None:
        """
        Insert a row. If state is None, insert placeholders (empty strings).
        """
        app = state.app if state else ""
        title = state.title if state else ""
        ts = now_local_iso()
        self.conn.execute(
            "INSERT INTO journal (time, app, title, event, screenshot) VALUES (?, ?, ?, ?, ?)",
            (ts, app, title, event, screenshot),
        )
        self.conn.commit()

    def close(self) -> None:
        try:
            self.conn.close()
        except Exception:
            pass
```

```py
# web.py
from flask import Flask, send_from_directory
import threading
from pathlib import Path


def create_app():
    base_dir = Path(__file__).parent

    app = Flask(
        __name__,
        static_folder=str(base_dir / "pages"),
        static_url_path="",
    )

    @app.route("/")
    def index():
        return send_from_directory(app.static_folder, "journal.html")

    # Serve static resources (favicons, assets, etc.)
    @app.route("/resources/<path:filename>")
    def resources(filename):
        return send_from_directory(base_dir / "resources", filename)

    return app


def run_web_server(port: int):
    app = create_app()
    app.run(
        host="127.0.0.1",
        port=port,
        debug=False,
        use_reloader=False,
    )


def start_in_background(port: int):
    thread = threading.Thread(
        target=run_web_server,
        args=(port,),
        daemon=True,
    )
    thread.start()
```

```html
<!-- journal.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />

    <title>journal</title>

    <!-- Tell the browser we support both color schemes -->
    <meta name="color-scheme" content="light dark" />

    <!-- Favicons: boring, explicit, predictable -->
    <link
      rel="icon"
      type="image/png"
      href="/resources/assets/journal favicon.png"
      media="(prefers-color-scheme: light)"
    />
    <link
      rel="icon"
      type="image/png"
      href="/resources/assets/journal light favicon.png"
      media="(prefers-color-scheme: dark)"
    />
  </head>
  <body></body>
</html>
```

make the change gentle if possible, and tell me the changes.

write good code, which is clear, cohesive, SOLID, minimal, intention-revealing, invariant-safe, DRY, YAGNI, low-coupling, boring.

show me the full code.

---

carte: clarify the game. think how to ask. (how to ask how to ask)

---

(cursor claude code alternatives)

learn from manus. (how, what do i want, and what may i ask)

i dont need automation. i dont need create my own manus. i need a set of prompts. yeah, it definitely helps, i think.

i would like to have some prompts. not manus. but claude code. (confirm)

https://manus.im/docs/features/wide-research?utm_source=chatgpt.com#what-is-wide-research

https://manus.im/share/IXdMjxObbFKbIjUUkBk4EH?replay=1

---

journal, mindmap like markdown nested list.

clarify. (summarize/normalize/standardize/...)

before design ui.

---

self. journal. (carte.)

pure.

pure project. (important. appealing.)

---

grow. eat.

---

have one aesthetic appealing idea (no more todo lists). test opencode myself, learning by doing.

have one complex task. test opencode, about the workflow, showcasing its power.

see things myself. sometimes just add some apis to chatgpt, that's enough.

"just find some skills and have some prompts"

that's value:

- proven workflow. good prompts.
- simple automation like self correction loop.

if it works and feels right, then that's it. no need to have infinite power. no need to chase everything.

---

phone.

finish thing.

---

```
# 2020 · 春华秋实

2020 年 12 月 14 日 星期一w雨w焦虑w816w4w[](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh)

AI·GEN

### 关键洞察

2020年因突如其来的疫情，许多计划被打乱，作者在家体验了远程教学，也因此有机会自学新技术（NextJS、NestJS）并独立完成项目，同时实现了学生时代自力更生、入职实习公司的愿望。拥有了人生第一台MacBook Pro和iPhone，觉得今年心愿得以实现。作者展望未来，憧憬探索未知和寻找心灵共鸣的人，并希望能在青春中真实生活、享受当下。最后寄语陌生人：努力与付出终会得到回报，人生故事还在继续。

# 2020 · 春华秋实

[https://year.innei.ren/2020](https://year.innei.ren/2020)

## 特殊的一年[](https://innei.in/notes/75#0__%E7%89%B9%E6%AE%8A%E7%9A%84%E4%B8%80%E5%B9%B4)

难忘的 2020 ，发生了太多未知，太多不可思议。

突如其来的疫情，把很多计划都打乱了。

在家困住的日子里，说不上无聊，只是呆久了，变得不想离开家了。

返校之际，也是四月中旬了，上半年好像什么也没做成，便过去了。

在这么特殊的一年，大家都没想到。只是能好好的活着，也不再奢求什么了。

## 逃脱网课中的学习[](https://innei.in/notes/75#1__%E9%80%83%E8%84%B1%E7%BD%91%E8%AF%BE%E4%B8%AD%E7%9A%84%E5%AD%A6%E4%B9%A0)

没想到是，在大学期间还能在家体验远程教学。这也便更加方便的"逃课"了，每天借着大把上课的时间，学着跟课程一点干系都没有的东西。

从 3 月开始，重新写一套自己的小窝需要多长时间。在此期间，我先后的学习了 NextJS、NestJS。花了一个半月的时间完成了一个比较能看的版本。

## 学业 OR 工作[](https://innei.in/notes/75#2__%E5%AD%A6%E4%B8%9A-or-%E5%B7%A5%E4%BD%9C)

曾经我也羡慕别人，能在学生时代便有一份工作。能够自力更生，用自己的赚的钱买自己想要的东西。

很幸运，能在今年正式入职一家公司，成了一名实习员工。

年中，我也拥有了第一台 MacBook Pro，iPhone..

也算是通过自己的努力实现了今年的愿望。

## 未来 AND 憧憬[](https://innei.in/notes/75#3__%E6%9C%AA%E6%9D%A5-and-%E6%86%A7%E6%86%AC)

新的一年，发现更多美好，尝试更多未知。

接下来的一年，更多未知等待着我。人生路很长，只不过是一个探索未知的过程。

当然更想，遇到一个电波相近的 ta，摆脱心灵的孤独。

希望新的开始，不必强加自己一个不必要的面具。在这短暂的青春里，应该享受当下。

停下来，中场休息

偶尔摘下耳机，停下来，听听这个世界

累了吗，合上电脑，看看外面的世界

生活也不应该是永不止步的前进。

## 寄语[](https://innei.in/notes/75#4__%E5%AF%84%E8%AF%AD)

陌生人，祝福你

愿每一份付出，终有回报

愿每一次努力，终有回响

## To Be Continue.[](https://innei.in/notes/75#5__to-be-continue)

余生还有很长 故事还要继续

谢谢你，陌生人。

**文章被专栏收录：**

---

![专栏 年终总结 的头像](https://mx.innei.in/api/v2/objects/icon/a2i4c49z4c2peudpxy.png)

[年终总结](https://innei.in/notes/topics/year-summary)

记录历年的年终总结

使用社交账号登录

-   ![](https://authjs.dev/img/providers/google.svg)


免登录评论

-   ![蝉時雨's avatar](https://cravatar.cn/avatar/2de17359a0f4a38eabb33eea1e574ac5?d=retro)

    [蝉時雨](https://chanshiyu.com/)2021 年 1 月 19 日 星期二#2

    凡是过往，皆为序章，凛冬散尽，星河长明，2021 冲鸭！


-   ![rxliuli's avatar](https://cravatar.cn/avatar/19c9e1e4f9d486d340d6160a308f1e6e?d=retro)

    [rxliuli](https://blog.rxliuli.com/)2020 年 12 月 15 日 星期二#1

    哇，你也要开始遭受社会的毒打了么？(๑´ㅂ\`๑)


-   ![Innei's avatar](https://cravatar.cn/avatar/f5691c13d9d78770ce478ee5039e0746?d=retro)

    [Innei](https://innei.ren/)2020 年 12 月 15 日 星期二#1#1

    曾经年少无知的自己终究不复存在了
```

```
# 谈谈课程、老师以及一些同学

2020 年 11 月 4 日 星期三w多云w不快w1023w8w[](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh)

AI·GEN

### 关键洞察

作者是一名国内非著名本科计算机系学生，从课程、老师和同学三方面表达了自己的不满和看法。课程方面，教材陈旧、课程内容过时且浅尝辄止，尤其偏爱C#和ASP.NET，缺乏前沿和实际应用能力。教师方面，只按旧教材照本宣科，教学方法落后，内容缺乏创新与时代性，前端课程甚至不用现代技术。部分同学对教学抱怨过多却缺乏自学能力，对自身定位与学校实际脱节，缺乏责任感和现实认知。整体反映出部分普通高校计算机教育的程序化、落后与学生和教师之间的认知差距。

# 谈谈课程、老师以及一些同学

本人就读国内某 N 流本科计算机系，下面以我自身观点谈谈课程、老师、以及一些同学。所有看法想法出自笔者本身，不掺杂他人言论，与他人无关。

## 墨守成规，毫无新意的课程[](https://innei.in/notes/73#0__%E5%A2%A8%E5%AE%88%E6%88%90%E8%A7%84%E6%AF%AB%E6%97%A0%E6%96%B0%E6%84%8F%E7%9A%84%E8%AF%BE%E7%A8%8B)

首先说说谭++，我们学校并不是用的谭浩强编写的那本 C 语言书，而是自己老是编写的教材，但从本质上来说基本大同小异。和大多数学校一样，入学之后开始教授 C 语言，对于很多没接触过任何编程语言的人来说，这是一个非常好的机会，去接触一个入门十分简单的语言。我也是之前只学过 C 语言基础。但，我只是说基础，仅仅是它的语言简单罢了。真的没必要去硬吹，毕竟不是每个人都是“天才”，以后都会从事类似嵌入式等等研究。

接下来说说众多的其他编程语言课程，我是真的很无语为什么要学这么多的编程语言，而且仅仅只是学一些基础，根本没有去深入。若真要说深入，那无非就是 C# 了，不知道为什么老师们对 C# 都这么情有独钟。你大概会说 C# 好啊，可以写 Unity。那你就错了。只是 SQL Server、 winform、asp.net。

## 不思进取，“因材施教”的老师[](https://innei.in/notes/73#1__%E4%B8%8D%E6%80%9D%E8%BF%9B%E5%8F%96%E5%9B%A0%E6%9D%90%E6%96%BD%E6%95%99%E7%9A%84%E8%80%81%E5%B8%88)

只因教材施教，大概是大部分老师的真实写照。然而教材可能多少年都不会变，教来教去无非就是这么点东西，但是时代总是在变得，知识也是需要不断的迭代更新，何况是在这个领域，哪怕是一周不学习就落伍的领域。但是我们并没有选择的余地，课上的内容是老掉牙的东西，放在如今根本没有学习的必要，但即便如此还要给你画大饼，说这个东西怎么怎么有用，有必要吗。培训班都没你这么拼。其次是教学方式，没有一个很好的切入口，让学生更加不知道这个东西学来有什么用。拿我们这学期开设的一门 Web 课举例子。虽然这是 Web 课但是却教的是 ASP.net，没有教你 CSS 怎么写， UI 怎么画，JS 干什么的，逻辑怎么用 JS 写等等，而是一股脑用 VS 拖个框框出来，一下感觉时代回到 00 年代的前端风格，没有任何 CSS，组件都是原生的样式。甚至从老师写 JS 来看，作为一个局内人，可以感觉他是真的不会写 JS，大概还在 ES3 年代吧。更别提 Vue，React 了。只是从 ASP.net 来说硬是把前端教成了几年前那种还不是前后端分离的那种偏后端的课程。完全没有涉及到前端三剑客，而是一味地拖拖框框 (winform 那种)。

还比如 windows 开发课，用的是 winform，因为我没有接触过 windows 开发暂不评价。

## 狂妄自大，异想天开的某些人[](https://innei.in/notes/73#2__%E7%8B%82%E5%A6%84%E8%87%AA%E5%A4%A7%E5%BC%82%E6%83%B3%E5%A4%A9%E5%BC%80%E7%9A%84%E6%9F%90%E4%BA%9B%E4%BA%BA)

然而，最近却有人举报某教安卓的老师教的过于简单。我没有接触过安卓开发暂不评论安卓老师是不是教的简单了。但是从多个角度讲，每个人的水平是不同的，而且又有很多人上课摸鱼根本啥都不会。从我角度，抛开安卓不说，教 Web 的教得就不简单吗，何况是这么老的东西，你咋不举报。我觉得他极大可能是以后从事安卓开发，但是经过了 2 个月的安卓课程之后，他发现自己啥成品都写不出来，责任全怪在老师。不会把不会吧，0202 年了，还有人真的天真的以为只靠老师教的这么点东西就能做出很牛逼的 app，毕业之后直接去大厂？自己什么水平不知道吗，你牛逼咋不能上 985211，出国留学。既然都在这种学校了，就不要了以为能靠老师，自己就不能自学吗，就连最基本的自学能力都没有的，还在那白日做梦呢。

使用社交账号登录

-   ![](https://authjs.dev/img/providers/google.svg)


免登录评论

-   ![qsyyke's avatar](https://cravatar.cn/avatar/20519f4f12031f3e9b3a03304948727d?d=retro)

    [qsyyke](https://blog.cco.vin/)2021 年 10 月 8 日 星期五#5

    我们学校也是这样，老师啥都会，但是啥都不精，教的也是特别简单，但是么，本身我学校就是一个二本，我学习都是在bilibili上。他们教的怎么样，也就跟我没关系


-   ![Soha Jin's avatar](https://cravatar.cn/avatar/5bf3f242d4fdca6849d31792a3c83c80?d=retro)

    [Soha Jin](https://soha.moe/)2020 年 12 月 3 日 星期四#4

    我觉得 xyz 的处理也有问题……从那以后他上课经常就是那种“哼你们居然举报我太简单，我有小情绪了，你们这么牛逼咋不飞啊”的感觉（


-   ![Innei's avatar](https://cravatar.cn/avatar/f5691c13d9d78770ce478ee5039e0746?d=retro)

    [Innei](https://innei.ren/)2020 年 12 月 3 日 星期四#4#1

    感觉 xyz 一直都是这样。


-   ![房东的喵's avatar](https://cravatar.cn/avatar/332a8b48b54211f92ecccd9ea6807e1e?d=retro)

    房东的喵2020 年 11 月 15 日 星期日#3

    看到一处错别字！


-   ![Innei's avatar](https://cravatar.cn/avatar/f5691c13d9d78770ce478ee5039e0746?d=retro)

    [Innei](https://innei.ren/)2020 年 11 月 16 日 星期一#3#1

    ！


-   ![行者's avatar](https://cravatar.cn/avatar/90a72f79c29a271881b6042015d331a3?d=retro)

    [行者](https://www.up1234567.com/blog/#/)2020 年 11 月 13 日 星期五#2

    学校的知识确实滞后很多，但是我建议你也不要觉得这些知识无用，其实学习的过程就是了解技术发展的历程，有助于理解技术的本质，是服务于业务的，不是说用的技术越新就越好，就好比现在的前后端分离，那对于成熟的业务系统而言，是需要额外的人力成本的，对于很多项目而言，理解技术的本质就能够更好地根据实际情况选择合适的框架，合适的就是最好的


-   ![Innei's avatar](https://cravatar.cn/avatar/f5691c13d9d78770ce478ee5039e0746?d=retro)

    [Innei](https://innei.ren/)2020 年 11 月 13 日 星期五#2#1

    的确，但是也要提一下新的技术栈和方向。不能让学生觉得现在的技术栈还是停留在从前。


-   ![司云老哥's avatar](https://cravatar.cn/avatar/4ab5410b2be21fef7d04b9d9e0f27888?d=retro)

    司云老哥2020 年 11 月 11 日 星期三#1

    看你炮轰那个举报安卓老师的学生笑死我了，说的没毛病，想好好学的话自己自学就OK了，确实没必要去举报老师，没什么意思。这学期的课也确实没啥意思，我也没有一点想学习的欲望。ASP.NET这门课，我觉得吧，贤明哥可能觉得之前的三剑客邹董董给咱们教的差不多了吧，然后确实，涉及更多的后端方向，他那天说同学就业的问题可能仅仅是想要同学们好好学习一些吧，毕竟也快毕业了，不过每个人有每个人不同的感受，哈哈哈，仅仅表达我的观点。


-   ![Innei's avatar](https://cravatar.cn/avatar/f5691c13d9d78770ce478ee5039e0746?d=retro)

    [Innei](https://innei.ren/)2020 年 11 月 11 日 星期三#1#1

    其实懂懂哥没教 js。
```

```
# 杂谈 -- 记开学

2020 年 9 月 20 日 星期日w雨w悲哀w1291w[](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh)

AI·GEN

### 关键洞察

这篇文章主要讲述了作者新学期返校的感受、对学校管理方式与课程安排的批评，以及生活中的一些琐事。文中提到，由于疫情原因，返校后限制学生外出，并持续每天填写体温问卷，让人觉得形式主义严重。作者对本校课程内容陈旧、教学方式落后表示不满，认为学校没有与时俱进，也无法因材施教。虽然大三课程繁重，但真正困扰的是内容和方法脱节于实际。天气方面，温州九月多雨，影响生活心情。最后分享了最近购买游戏机与耳机的日常体验。

# 杂谈 -- 记开学

## 序[](https://innei.in/notes/70#0__%E5%BA%8F)

转眼又是一年九月，原本在家已是秋高气爽，来到温州再一次感受到了夏天的气息。不同往年的开学祭，新生还没有报道。各个年级分批返校。返校之后又是强调不要外出不要外出，只能在大学城内活动。包括强调了国庆也不要回家了。每天都要登记体温问卷，从暑假开始到了现在开学还要持续进行，除了每天浪费几分钟之外想不到还有什么用途。所有的一切都是装模作样。每天班群里总有各种奇奇怪怪的`@全体成员`。大概之所以这样，有些不愿安于现状的人会选择退学转而去国外进修吧。当然这不会是我了。毕竟还只有一年了，再忍忍就过去了。

前段时间阅读了 @Himself65 写的「退学计」，虽然原文已删，但是看过之后感触很深。

> 一流大学抓学术，二流大学抓教育，三流大学抓纪律

## 关于课程[](https://innei.in/notes/70#1__%E5%85%B3%E4%BA%8E%E8%AF%BE%E7%A8%8B)

很长一段时间我都想着能快点毕业，以摆脱如今就读学校的课程和教育。转眼间，大三了。出乎意料的是大三的课比大二还多，曾经听说上大学就是去体验生活的，但事实并非如此。我所厌恶的不是繁重的课程，而是那一老套的教学方式，一成不变的课程内容，不懂得变通的解决问题的方式。论课程，即便是处于 2020 年，仍在教授上个世纪课程，谭++，ASP。完全与时代脱节，即使是完全吸收课上所教授的，毕业之后完全找不到工作。虽说关键还是得课下自己学习新技术，但是每天一味的用十分老套的方式教着过时的东西，让我感到很反感。甚至能用语言去各种包装这些东西，让真正的小白永远活在井底，不想去看看外面的世界。多么悲哀。在各种领域，都有很明显的两极分化，何况是计算机或者说软件开发。但是很多学校并不能做到因材施教，在我就读学校为例，有的老师甚至不如学生，因为他们不懂得与时俱进。

## 关于天气[](https://innei.in/notes/70#2__%E5%85%B3%E4%BA%8E%E5%A4%A9%E6%B0%94)

印象中，初次遇见这座城市，它正下着雨，每个九月便是雨季。断断续续能下半个月。下雨天最烦的还是上下课的通勤，以及晾不干衣服。下雨天能让人变得更加抑郁..

## 关于剁手[](https://innei.in/notes/70#3__%E5%85%B3%E4%BA%8E%E5%89%81%E6%89%8B)

这个月入手了 NS，但是游戏真的好贵啊啊啊。

刚刚又剁手入了 AirPods Pro。割肉了。。

使用社交账号登录

-   ![](https://authjs.dev/img/providers/google.svg)


免登录评论

-   ![11's avatar](https://cravatar.cn/avatar/e94656cb82a8f7228e13e1d9d56fb101?d=retro)

    112020 年 10 月 24 日 星期六#4

    wow爱你爱你感谢开源


-   ![kicoe's avatar](https://cravatar.cn/avatar/7c6d3737a25a9ec47b5439ec123bd1df?d=retro)

    [kicoe](https://www.kicoe.com/)2020 年 10 月 11 日 星期日#3

    NS！！！明年可以一起玩怪猎呀


-   ![Innei's avatar](https://cravatar.cn/avatar/f5691c13d9d78770ce478ee5039e0746?d=retro)

    [Innei](https://innei.ren/)2020 年 10 月 11 日 星期日#3#1

    好耶


-   ![保罗's avatar](https://cravatar.cn/avatar/d22eb460ecab37fcd7205e6a3c55c228?d=retro)

    [保罗](https://paugram.com/)2020 年 9 月 22 日 星期二#2

    割肉？谁信哦 🌹🐔
```

```
# 半年实习总结

2020 年 8 月 6 日 星期四w晴w开心w954w3w[](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh)

AI·GEN

### 关键洞察

作者自2019年12月进入团队实习，经历了半年多的时间。刚开始的时候对React和Redux不熟悉，快速学习后参与并提交了第一个PR。寒假期间对项目结构和业务梳理后，推动团队引入了ESLint、Prettier等代码规范及Github Action自动化流程。正式入职后主要负责业务开发、修复bug，并推动了前端TypeScript化、搭建工具链和自动化流程、学习Electron并启动相关项目，开发了若干组件。平时利用摸鱼及业余时间，自学TypeScript、Swift、Golang、NestJS、NextJS、Vue3等技术，并开发了个人网站mx-space并开源，欢迎他人参与。

# 半年实习总结

从去年 12 月以来断断续续，到现在 8 月，过去半年多了，然后在这里记录一下，半年多实习的情况。

## 我做了什么[](https://innei.in/notes/68#0__%E6%88%91%E5%81%9A%E4%BA%86%E4%BB%80%E4%B9%88)

**2019.12**

刚入职进入团队那会||其实那时还没有入职，正式入职在今年二月份||，我还没有学过 React，我只是一个只会写写 Vue 2 的彩笔||不要说了现在也是||。然后我花了一天时间学会了 React，又花了一天时间学了一下 Redux。然后就开始看看项目，大改过了一周，我开始贡献代码了。||不堪回首，这都写得啥啊||我记得那时候提交的第一个 PR 是关于多文件上传的。

**2020.1‌**

转眼就放寒假了，这个月基本没什么干活，在这个月里，我对整体的业务和项目的结构都看的差不多了，基本也知道哪跟哪了，但是对一个项目没有配置工具链，我是不能忍受的。所以组里讨论了一下，希望能加一套工具链。就是常说的 ESLint，Prettier 这类工具。之后，我配置了一下工具链，终于代码风格得到统一。我可以愉快地用 NeoVim 写代码了。在这之后，又配置一下自动化构建流程，也就是 GitHub Action，大大提高了效率。

**2020.2**

这个月正式入职了，加下来几个月想不起来做了什么了，大概就是写业务，修 bug。无非就是写写页面，封封组件，沦为一个切图仔。

**至今**

在前端项目里，这段时间我只干了这么几件有意义的事情。

-   推进了前端 TypeScript 化

对于如此庞大的项目，单纯使用 JavaScript，太容易造成各种 undefined 的问题了||TypeError：Undefined is not a function 警告||。而且组件之间 Props 没有提示太容易写错了。

-   建立工具链，自动化流程
-   学习了一下 Electron||其实我并不是很接受它||，并对 Electron 项目起了基层
-   做了一些有意思的小组件（Custom Markdown Token Render, mx\-player）

**摸鱼时刻**

||摸鱼是肯定要摸鱼的，不摸鱼又没有钱赚。||

因为我是兼职，所以在平时除了在校学习划水，还能再业余时间自学点好玩的东西。

如下：

**语言层**

-   TypeScript
-   Swift
-   Golang

**框架**

-   NestJS
-   NextJS
-   Vue 3
-   SwiftUI （Loading...）

并且在期间（2020.3 \- now）开发了一个属于![](https://innei.in/innei-dark.svg)[自己的小窝](https://innei.in/)。欢迎来玩呀。

对了，它是开源的。欢迎来 PR 呀！[mx\-space](https://github.com/mx-space)

**文章被专栏收录：**

---

![专栏 阶段性总结 的头像](https://mx.innei.in/api/v2/objects/icon/289hoaljffu6ey7ea9.png)

[阶段性总结](https://innei.in/notes/topics/stage-summary)

回首往事，不知不觉又要 emo 了。

使用社交账号登录

-   ![](https://authjs.dev/img/providers/google.svg)


免登录评论

-   ![Innei's avatar](https://cravatar.cn/avatar/f5691c13d9d78770ce478ee5039e0746?d=retro)

    [Innei](https://innei.ren/)2022 年 5 月 22 日 星期日#6来自：上海

    不知不觉已经过去这么久了。


-   ![蝉時雨's avatar](https://cravatar.cn/avatar/2de17359a0f4a38eabb33eea1e574ac5?d=retro)

    [蝉時雨](https://chanshiyu.com/)2020 年 9 月 2 日 星期三#5

    速度这么快的嘛，前面才开始推 ESlint、Prettier，后面就直接上 TS 了，团队接受程度这么高的嘛。


-   ![Innei's avatar](https://cravatar.cn/avatar/f5691c13d9d78770ce478ee5039e0746?d=retro)

    [Innei](https://innei.ren/)2020 年 9 月 2 日 星期三#5#1

    万事都得有个人起个头，最近有人已经 pr 了单测样例，接下来又可以玩了。


-   ![KN95口罩's avatar](https://cravatar.cn/avatar/8acaa334bee2f158d5e61768b783daf5?d=retro)

    [KN95口罩](http://www.kangchengmask.cn/)2020 年 8 月 22 日 星期六#4

    文章写的真好！支持一下


-   ![KN95口罩's avatar](https://cravatar.cn/avatar/8acaa334bee2f158d5e61768b783daf5?d=retro)

    [KN95口罩](http://www.kangchengmask.cn/)2020 年 8 月 22 日 星期六#3

    加油！


-   ![jack's avatar](https://cravatar.cn/avatar/99a4be96abaf6a2748131ce9b9d198aa?d=retro)

    [jack](http://wangsong.wang/)2020 年 8 月 18 日 星期二#2

    这个开源怎么搭建呀


-   ![Innei's avatar](https://cravatar.cn/avatar/f5691c13d9d78770ce478ee5039e0746?d=retro)

    [Innei](https://innei.ren/)2020 年 8 月 18 日 星期二#2#1

    暂无文档，一切随缘。(其实是懒


-   ![jack's avatar](https://cravatar.cn/avatar/99a4be96abaf6a2748131ce9b9d198aa?d=retro)

    [jack](http://fengshanshan.wang/)2020 年 8 月 18 日 星期二#2#1#1

    好喜欢你的站点，还没找到喜欢的，要是可以搭建就好了


-   ![Innei's avatar](https://cravatar.cn/avatar/f5691c13d9d78770ce478ee5039e0746?d=retro)

    [Innei](https://innei.ren/)2020 年 9 月 6 日 星期日#2#1#1#1

    试试 [https://github.com/Innei/candy](https://github.com/Innei/candy)


-   ![raptazure's avatar](https://cravatar.cn/avatar/1b0e4a828789e45d497604918733c699?d=retro)

    [raptazure](https://raptazure.github.io/)2020 年 8 月 6 日 星期四#1

    dl加油


-   ![Innei's avatar](https://cravatar.cn/avatar/badb36abfbd00fa3ab9b2fee5ca39f12?d=retro)

    [Innei](https://innei.ren/)2020 年 8 月 7 日 星期五#1#1

    加油💪！
```

---

next:

archive things. (telegram message)

close tabs (read myself, move to lights)

<!-- close todos. -->

dont learn a lot of tools. leverage thinking (what's/whether it's pragmatic.) 

trust my intuition more.

curiosity... good. but dont over do it. (e.g. divide literature)

opencode skill. test. learn by doing. (tell llms my ideas. dont be afraid of overfitting.)

---

ai lian shuo. heng sheng teng man pang sheng zhi jin

chinese textbook articles.

categorize apps

"make all (existing) useful tools elegant"

categorize world's infomation

"organize the world’s information and make it universally accessible and useful"

---

rm notification automatically.

try to disable them, including the android ones. idk which one is sending notifications. now a call could not be placed.
