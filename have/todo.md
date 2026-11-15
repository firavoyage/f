# plan

# todo

## m

view the snapshot of a site

rp the links.

if you can read (static), you can easily do that.

- show nothing wo param
- read the page (or "not archived") of such param, rp body innerhtml
- intercept link to rp such param

doesnt feel you have to live proxy.

you may just swap some links to caches. (dont worry, you have a copy of static aside.)
i.e. webpage/ab/cd/foo/index.html -> webpage/ef/gf/bar/index.html, you cd .. three times before diving into the new index

btw, you may have scalable id for results aw.
if you have 1m for each result (e.g. plain text htmls), 1m results is just 1g. typically easy to reach and unscable.

you can absolutely postprocess for this.

well, you may proxy anyway. it would be even easier. you dont have to make it a react app. you can just serve from the starting point of such results, serve everything static, and inject some navigation script.

conclusion

- you can read cache url: html | nil
  - it doesnt matter whether to fetch in real time or return nil
  - complete traveral is expected
- you host a server `?url=...`
  - dont get trapped! you dont always need react vite spa.
  - you read cache and return html
  - you inject navigation js
    - you may take a brute force approach, e.g. function to string, find and replace head tag (if you could not append after closing html tag), and call it

## s

read main content

## c

## w

# backlog

## use cases

archive everything

- public internet <!-- clearnet -->
  - blog indices
    - travellings
    - moe
    - ...
  - ruanyf, ruanyf books
  - matrix67
  - f/web
  - bfs (e.g. chyk, clantty, menci)
- zhihu
  - "following"
- telegram
  - github telegram indices
  - "with"
- twitter
  - "list f"

---

import wanqu daily archive

https://github.com/NiceLabs/wanqu-daily-dump

https://nicelabs.github.io/wanqu-daily-dump/

---

Zhihu auto sync, global playwright

---

test: display works/posts of some ppl

i would include these ppl in the first archive

- acbox
- ame akari
- matrix67
- ruanyf
- steven lynn
- umr
- nyac.at

---

## archi, deps, integrations

research pdf parsing, convert to structured data, and convert to md

---

support import from tg

Have.

Make sure you have enough space and export all tg chats one by one. (I can help with some automation).

Then you can, for example, timeline any user across channels and chats.

(An user can have many accounts, I will simply preprocess, and cache maybe.)

---

research and design the format, e.g. activity pub

tg export. standardized activity pub.

https://github.com/one-among-us/tg-blog

https://github.com/one-among-us/TelegramBackup

https://test-tg.one-among.us/test

https://aza.moe/life

...

zhihu to activity pub.

comments.

categories.

traditional blog.

## experiments

research social relationships on the internet

Research: relationship of vtubers. When you sub someone you are likely to sub these. Relationship of internet bloggers. Menci's friends.

Research:

start from a few good ppl or channel. Like educators, menci, matrix67, etc. like qingniao channel.

Bfs.

Save all members. List.

Convert to graph. Sort.

In essence, from one point,

Gather everyone. Organize and analyze. Archive.

Stand on the shoulder of giants. Github tg indexers. Telemetrio. Libs. Etc.

...

if you can get the following list of ppl you follow, then you could analyze.

berryberry could be sns between small potatoes.

on zhihu, i see about 100/500 of my following follows jiang zijun.

on berryberry i think i could do the similar thing. (although i should study the basics first and dev my infra.)

...

travellings are good.

there are about 1k blogs. not very much. but we can broaden with frnd links.

we can build an afo on it.

(ref: eat.)

also, it's more neutral (safer) than using menci/chyk/leohearts as the first starting node. (though, i could pick some foregin chinese to make sure they are safe after citing.)
