todo

message/paste · todo · tabs/things · scratch pad · weekly/projects · notes

<!--

be simple. leverage thinking.

i dont need infinite power. dont dive into tooling/methodology.

pragmatism.

an intuitive mind is sacred.

curiosity... good. but dont over do it.

learn by doing.

finish things: close, organize, think, prepare... importance over urgency.

 -->

<!-- make it work first. make it beautiful next. -->

<!-- "non trivial". -->

<!-- do things that dont scale. -->

<!--

archive.

organize.

analyze.

 -->

<!--

- **Action is the only metric.** You cannot think your way to a solution; you must build your way there.
- **Start with yourself.** The best ideas often come from solving a problem you have personally experienced.
- **Imperfect is beautiful.** A rough project that exists in the world is infinitely better than a perfect project that stays in your head.

- **The Trap of "Stealth Mode":** Hiding your idea to "protect" it usually means you are building something nobody wants. Share it early.
- **The Trap of Over-Engineering:** Do not build a complex system for thousands of users when you do not yet have one user. Solve the problem for one person first.
- **The Trap of Analysis Paralysis:** It is easy to get stuck choosing the perfect color or the perfect name. These things matter less than you think. Function comes first.

 -->

---

life

"arrange todo"

---

(see things)

(see notes)

---

humility

---

research manus use cases myself. find inspiration.

---

make log lib.

i can log, fs, kv.

---

rethink "loop".

---

refactor. no more jsdoc. (prev code? message?)

types? (rethink result. i think i will keep it. failures are expected, like unreliable network, invalid input, etc. try catches are dirty.)

---

lib adwaita on web.

---

lobehub uses jina ai. just add r.jina.ai before your url.

there are a lot of things like jina, exa. find them all.

---

d.ts.

- std types
- bot types

---

?

think.

normalize

```
  - no try catch unless external libraries need, (... instead)
  - no throw
  - no nested if. if err, return/continue/break.
```

"prefer early return when err to avoid nested conditions"

---

(component libraries)

auto pass some default props like dark mode?

no need to overthink props/state. (abstraction on all frameworks / components)

i mean to be pragmatic.

how does adwaita do.

---

fs.

abstract fs like ruby.

change name: snake case. single word.

change behavior: create path when needed, like vscode. handle common issues like dangerous/invalid characters.

kv.

---

ask.

---

archive.

abstract.

---

simplify notes and research on drafts and humility.

rm most.

also simplify todos/things/tabs. (important)

merge things & tabs?

trim humility notes. remove nonsense.

---

what should i do now?

simplify. 

research, think, write, review the reality.

---

xdg spec.

folders on all platforms.

---

provider abstraction design. ~~generator.~~

ux.

---

testing (?)

i dont think we need that heavy js testing libs.

a test lib? yaml.

fn. input. output. 

you can actually dynamic import.

```ts
await import(module_path) // the same as normal import
// you get a obj of fn. 
```

write a simple testing lib.

---

watch films. there are many.

pick some bangumis from anime sedai. there are not many left.

---

lint unused?

find a config.

ci.

---

git abstraction.

i think you could even as daily backup... and sync.

---

log.

decorator?

reproduce?

---

uninteractive widgets.

- math graph
- color
- trend
- weather
- stock / currency / polymarket

research types. (maybe py lib plus google sans)

<!-- though, i wish google ai mode could show the original code... upd: well, it does. (?) no, it does not. it's not the graph code. though it's quite simple. just a bit default styling (margin, font) and pyplotlib knowledge. it shows an animation on web, but i suppose it's just fetching data, not rendering in js. -->

---

linear foss ui.

categorize and simplify todos, research, and notes.

e.g. projects.

---

github 3p ui.

---

humility: export, reproduce, copy and paste the prompt & result, proxy.

---

file lib.

tell it how to handle errors (div zero pattern)

(you might repeat div zero on var/prop name and type. but that's generally acceptable?)

(you dont have to wrap, but it's good to avoid magic consts and export the errors)

> rust builtin error types in std (e.g. file)

...

rm the "files" tab.

- success.
- fail.

just list all the failures.

name the methods.

you know them.

awa some non standard ones.

- file name too long (trim?)
- invalid name (convert? how?)
- no space
- no ram
- non existing (auto create the path.)

xdg desktop? (i think so. if we always combine two abstractions, we could simplify it as a pattern.) compatible?

symlink hash?

---

bilibili fav sync. & auto backup.

auto backup means to backup once you save. e.g. zhihu, berryberry.

though, ive no idea if those taken down within 1d are valuable for archival.

---

spec template.

---

check the time on file name by file metadata in drafts w shell script

typo lib?

a bigger and better lib?

build a cli for that.

learn

- cli
- typo lib
- time lib (file)

---

export twitter. research cli. or build my own.

---

research projects on

https://nat.org/

https://danielgross.com/

---

precious, [5/2/26 12:03 PM]
Clear:

Get birth time 

Set birth time. 

Hacky:

Birth time

Birth time arg 1

precious, [5/2/26 12:55 PM]
Path. Data. Config. Cache. You will likely have a string, a node path, or something r/writable. Ofc, you can have path directly which is relative or absolute and ~ will be expanded as home.

Write path. Read path. Stream if needed. 

Append. Edit. Common things.

Get/Set {metadata} Path.

Copy. Move. Remove. 

Non existing path will be created. 

You can config like illegal filename/too long path.

Db/hash symlink might be overkill.

precious, [5/2/26 3:16 PM]
Manus? 

(Interactive) Components. 

Separate style from functionality? 

Para? (Blog in any theme.)

precious, [5/2/26 3:34 PM]
Have. 

Make sure you have enough space and export all tg chats one by one. (I can help with some automation).

Then you can, for example, timeline any user across channels and chats.

(An user can have many accounts, I will simply preprocess, and cache maybe.)

precious, [5/2/26 4:38 PM]
Para. <!-- blog -->

Get where you are from the url. 

Get the pref, like lang, dark mode. 

Now you know the data and the config. 

Fetch the data. 

You can be static, server side, or client side

(Isc is perf for static. Rsc is an abstraction on ssg)

precious, [5/2/26 5:59 PM]
V. 

Write a git ignore before anything.

For each step it will init if needed.

Save. A state. You can give it a name. 

Remove. A state from history, forever. 

Restore a state. Or export it to a path.

List all states. Paired w export, you can have a list of folders of all past states. I could symlink the same files. 

Sync. Push to a remote. Or all remotes. It will do best effort. Error can be network, permission/constraint, or others, like secret key. It will also pull then. If conflict it will convert to a pr. And if forced it will merge everything with local files of higher priority.

Dl. Clone a repo. Make best effort to continue for large repos.

On collaboration/contribution, pr is not git builtin. I will have a dedicated hidden folder for all prs. Each is a yaml. Desc. File diffs. Awa any other metadata you like. Yaml is editable json wo cost. Btw Toml is strict, which is meaningless. Every pr is incremental (a new yaml file), no possible conflict (at the git level).

I suppose when you clone, git does this:

Fetch the metadata. Dl every file with wget continuously in parallel. Apply to fs. 

Though it's old and might not be what I've expected. e.g. idk how it handles incompatible filenames.

By default if you dont give an id (primary key meme from cyannyan) it will generate an uuid and tell you. 

About commit msg. It's your resp. 

Likely another yaml. 

It can auto save every sec or file change event (make sure you dont put secrets anywhere). But only some would be mapped w a dedicated msg. Others are for time machine. 

I would use a flexible change dot md as always in my style. 

Btw, how to v a pre existing folder w another separate git?

---

React? 

https://www.google.com/search?aep=11&q=does+parceljs+differ+dev+and+prod&mstk=AUtExfCrXMfOXqUzBcZvHPT7K_R8q9zDr7L2XSsWDL4EVS0uFD1OzYREIWd0upSQIG1BQA1NxmveTXKifa0bcaSMqh0ID3Sb9vsyKuJ8zOYXS8HUpoQFB28TjwPj7q5w0Uz7OkdW33_tuWGXtxhNDKA-7ta3xshe9j578RwnxJfG6jnx3RsQrQnm5Pe8zAyxg59LWvErKVLipapSYlF_JEBCcM4961ikGud_4z0Ki83ev7vFs8fHjm_IaZkv2lqL5xASJaLk8vWh9Y-vXQ&csuir=1&mtid=39j2aeaXFb6r0-kPp4X2kAE&udm=50

https://www.google.com/search?aep=11&q=can+I+do+almost+everything+with+only+use+state+and+use+effect+&mstk=AUtExfBNhhyM0Fe83e-vzkQHNhRmwkIhMNMsWKUxBCDXXurDhABvysc5SeRI7mYLI2cG4O3hKHt2HgBZpDFa9zRgXVFoC4WAx8AhDakR5VYEQgR1tcNLOqnpMYFU0iIpsiVcjo59tuFfrHkNBXA9T08zL1jTgqeU4MYzAv_5mwUu80wcV2bgvsJvpFIqEnnnTQUXkvNVq1liLhijrcrQS5YlFTBrJtEHgkm6HYtw-YqxrI6_qB_16d2SURKpsyrHI9EsSjAVYXwuF0j0vQ&csuir=1&mtid=69n2abfHE92u2roPhJa10QE&udm=50

https://www.google.com/search?aep=11&q=how+does+parceljs+transpile+jsx+if+I%27m+using+my+own+framework+&mstk=AUtExfBt9DDsARuRZ5eEQCg_AKs6WqEexg4PHSfa9a8AttS6pbEbYt-KqQUFfoCFqY0CRqFlfGpoaaYLuwCGXUNKf_8_owAJIA_jcA6pXG6BVRrrT_gvoo2axoKHhIRCWXkjBhn12QM456khOefHY4K15SvIhtVQQa0tkM0LUOxRF7hmzudQb-oKTD3NHmCOwEQZGtO8N7uOIhn1gHU9lPcg37JefcpU60dNwcfykkgxYiw2IjXhnst4jRZX6wwbC_9JEjfpAiMO-vfgSQ&csuir=1&mtid=kNv2aYPpJrXDvr0PsdSPgAU&udm=50

https://www.google.com/search?aep=11&q=telegram+teact+library+&mstk=AUtExfCoULZN7CmLD2_7JmYoSwe_xJm0ZBEZz4jFIaGkxn66XEnDQFV3eZMQaWnfQLuWyNPSjtZDoj7nVM5MhJHrfK8tU68fXl92RoUelofM4XHFMn0guA4EUPk1WB24rGRigcM7I5RlQYY4wop1XLUinMdQZepEYSfnySWCxSZBdD_kRJ2qtYxHaPaMgMJarkDEyPn8a2q42voGsyi9q5dZIO63qbyqO1Hr5R2RSmndruXf53YoJmznj065I0Sy2yQ5fVSJxsajdgSsfQ&csuir=1&mtid=zNz2acKpAp2Pvr0PmvOtuA0&udm=50

---

precious, [5/4/26 1:17 AM]
Export memoh chat from apr to may. 

Leak some trivial private personal info of the pm chatting w the same bot on another platform.

Crankywellcome

precious, [5/4/26 1:55 AM]
https://www.google.com/search?udm=50&aep=11&q=framework+agnostic+library+to+build+component+libraries+that+can+compile+to+any&mstk=AUtExfBjM7H0YuGkOEinjn6NKYvV9IWdGvahZTlw7X8rV7eByiEgEmGpAqH2mDPOm5Nw2N_UdaZTHLXHPfMML9KJceFN9s2VPOxT_hBcEONPBvVHzk8ip-LkAnycb9HmAX6UiWKGK5gOlH1bIs1RoS1QlsMmLGHeHFI-3wjkQANrwAzoecJUX_u4TtOWzM5At-33pkHcbRaWFZl8_JAa52tCDLkA98Sm26453k2xC9TLRnk7Wrx-dh0wnY08yAsNfJEQRrBXyDNlPtPGgQ&csuir=1&mtid=kG_3aZq4EouNvr0PusW6-A0

https://www.google.com/search?aep=11&q=Mitosis+library+example&mstk=AUtExfAK_fd8GAwOC5N4lbIWzA_zk0wcpXCARy3vTicI4UzlKM-1mJdLxHUoMeCaKDDQtv9ufYiE6ls01p84_M_gi9Zct3_xoqrQBaFcsbkpKUQsxldh7moWgZxnZjThFK81Sx1U2JIj87V6Jg2ah83MKU62SAihi6Xl8cW7082JFZoXvsbo7R_FsBF79GgK0McOX24LrZPxjJGfsvwcec4KtZxZKSCIY7BSJ0D1nDICkh6v_Gpm6aOqNyRU4VFv0eUjF2Hw35KaDGXsTg&csuir=1&mtid=xG_3afybNeCMvr0PqoXS6Qs&udm=50

https://www.google.com/search?aep=11&q=zagjs+examples+&mstk=AUtExfAOhMpHWfht1Or777QS7EVzDiAgmqF1aa1-hAPGboz-oZh6ulWE0H4SZdmbGuQkaCfAgZ9QdVTD_t2aU3BvyrVcPgaOyNwZhtZeFD7UGhiLNDyztddzBCzIhIMmvaSMmkoXRa4ipG4DFtaRcAMKTPyX9BarK0ypxA7FbNVVBuKfk8nuWDidz73XuqVYcc7gjX1TsZa8c1zE4rPtcSHMzhaVx_iRoplqyEntzDGTv4TrxddK6gMOwSeTj0D_xV6eLjdORilZVQE9UA&csuir=1&mtid=gof3adHfO9zO2roPru-SoQM&udm=50

https://www.google.com/search?aep=11&q=compare+react+and+web+components+examples&mstk=AUtExfCnOhldnmvusePOCz5JYstp8rwHssV4-ANwOwUzZeykrOz1ns51pBzU1toN79RVP18POEXkJKM9hVNaKXbzNO8lR4Adx-uHZpbZ9H1XwAeZSNMGqoK0tjCvmDxUPVjpvpFsVB9uWRW0xzG20asntTcnTwujAQw11svPo0BLb7V7bUceYjotG0r-FEwJNhKuFqRCfTe1vmo_XpPml-_-YAXRvrJ3cd0GJOJ8ggJQ9rsFYw7b7PkxKYioSD4lTS8LK-fUu8Z_Qbc4WQ&csuir=1&mtid=YXL3aevANMmKvr0PuoDXYQ&udm=50

https://www.google.com/search?udm=50&aep=11&q=web+components+history&mstk=AUtExfDGVg1lnTIhTO0NEr_zhOnTjE_OeMfpGsKdJ6IEW5PYrswZrL2PFlsyeNvp0FhM2kR7vxFJ0zgdSivurEnXvNKFcplLTjYIcy9JPdLC_CntmUWYdrT0ZXLKd0QMRGzQWmcScny0VK0CCAjFy2GCtg4wFMUS3aSLpa55pOICq3Obpjiy2Wh0vHFp4XgR0F7cX-wfgzbhJy8Ou3Vo-fwPDjF3tGeYLWIbami9FuRWlJzf_AwiDFsPiyGVRgFQx5j--ZA4fz2Yq_heRA&csuir=1&mtid=mnL3acT1O8mKvr0PuoDXYQ

https://www.google.com/search?udm=50&aep=11&q=most+loved+web+components+library&mstk=AUtExfAaG0ljVGPjf7OfKsk64C0d35A4fCfZT4h6-l6ibqdvjLtsjNFmo6L5B4JHFL_-rtBX7-g4tbutLHdzfNwK3sSxCyzRJw6oxmqDQn9IR8XdvgH5l2-FD47kuYsRY2NUAjsMvMup4pnsTsiCl47qTX5pkLYj8qXsOyaqmiF_Xb8GdwkFHawp3qy796zbOh7QENznObB06j8a988H9KAmjrRmtEKbDVzokiiEkQ5xINXOxWDn4fuVYXaGdq1zT1P709dkpESywJaCpQ&csuir=1&mtid=UHT3acOiHIjo1e8P2tz_4Ak

https://www.google.com/search?aep=11&q=compare+react+and+lit+examples&mstk=AUtExfDMj1GC3BOzfmJopPaCUz7jG6KD-X6TO0mCpEFTwTsSVZLUK6yuSHfRraUtJBmd5dyPRivW5N01pTuDnT8Gp_08tnjTPiQJl4wXRejmtYw9rV4FnQRxBLwv_1X8_VtgnG6W82_7q9xShrYsQUU_tPUeKbmqGHlEikY1-wRAFVgF1oVLPZpYQcBWutipVcpqHGABMtyZANRpEean7w9kTAFrhw5Vxf8BQe7AuATYk_QYilMxx7k1QNYfPseTVncZO35g0Zd1ixPA2g&csuir=1&mtid=fnT3aZDJLZmMvr0P0p6T0QQ&udm=50

precious, [5/4/26 2:56 AM]
Export ame Rikki. 

Some deleted msgs are not exported. 

Even for some, like legacy desktop setup, retro pics, and complex feeling on adhesiontek, I do have saved them in ref.

(Rm) Archive ame deleted.

precious, [5/4/26 2:59 AM]
Export ref.

precious, [5/4/26 3:02 AM]
Export sotr.

Discussion aw? （Compromise: only text to avoid duplicate and make it fast)

precious, [5/4/26 3:18 AM]
View all channel msgs in tg. 

I will have it. 

Way better than streams and vids wo any long term value.

precious, [5/4/26 3:48 AM]
export tcdw_channel. not quite valuable. but it cant go wrong. (upd: stopped halfway and rm).

also, i dont wanna export stvnlynn. full of rt. social nonsenses. mediocrity.

i will archive and sync tomorrow, as there are a lot. and some lead to dev, which needs energy.

plan: paste to journal, rm most msgs. find meaningful chats related to myself and paste. archive llm chats. think next step.

No music. Nc On.

sleep.

precious, [5/4/26 2:17 PM]
https://www.google.com/search?aep=11&q=i+have+1usd+i+want+it+to+become+2.+tomorrow+any+amount+lower+than+2+will+evaluate+to+zero.+more+than+2+will+reduce+to+2.+there+are+many+options+to+gamble.+assume+there+is+no+fee.+all+gambling+expectation+equal+to+the+amount+I+bet.+how+to+maximize+the+evaluation+tomorrow.&mstk=AUtExfCpYEIGaNS1U_aonV5r1cu_ApxJotVo6efiQBt6Qasg7qVt6AaFSiM3tAZVqZ606WENHOfJc5l2sJdVhJ0Ce4H0t4zBW0xU-2zyfsHe_Y6VcD5okPQ0VuoehSZcOFl1KYhRngaDJytP-9iJVDxmHHQk9ARxLUwJKUqETnfnV5NYZoeFYVjKtx0Opd1INalHi1BaMc_R-nTr1nVdk3yWERA2mIb0ih6QwIHXXlww0Qk3Gm5aqHCaIFcnHXSd6sSM7Vl9eNcGuskY-g&csuir=1&mtid=4jX4abyNOIPZ1e8P4arbiAI&udm=50

precious, [5/4/26 2:30 PM]
https://www.google.com/search?udm=50&aep=11&q=why+is+march+7th+considered+mtf&mstk=AUtExfC8YNlA7tuUrNsy5MAQxSafHxyJOGIl0zXehnZu9dgT9rBY-ZUu-eWc6j8bF-pXzeSTAACkE5qzaDDPOddIDZ63FFA2RnX6hCqA2N4BczQSKVLuvBVd0604yzVi8rrmg3rOM10JGh3O9BR5j9aadeCgEirOEWKY82w&csuir=1&mtid=sDz4afn-Errr2roPvdr6kAg

precious, [5/4/26 2:34 PM]
I want to find some design. If I like I can further go to the figma. 

Also, component lib.

Where.

precious, [5/4/26 3:17 PM]
Rd steven Lynn channel

precious, [5/4/26 3:46 PM]
https://www.google.com/search?aep=11&q=how+is+manus+meta+status+after+mlcn+gov+&mstk=AUtExfAUmvicEIDo4Y_gJqW-4nxu_khYFgbxHXolA6UNfGgVcR1keCUFto8-MfGugM0vbzLHZG9AK2av1M8eLqA_6J09Qk0TwvxQImv31tHr0uY6Shp3GL_cnzVldfJhZrG-zk1sJljBmshJKj7pbV2eXaTK3gKh7F87ZhNJNHI1hl2JQ9O1wzkj0cJJi4dc4hLDvzVVyJ9Ptvftulo_GcnMdsakxElqCsynEtXCOSYS7QrCyGOOQTz0PW1AFZ4wcfy86dncyBvmif4C-A&csuir=1&mtid=aEj4admDD_rk2roP3dyYqQ4&udm=50

---

research css filter prop.

ref: https://bridge.surf/

---

para.

<!-- poc: code runner works for markdown. you can press ctrl r instead of ctrl shift v. -->

vscode md preview is not feature rich.

i could not ctrl f. i could not have toc.

research: gemini. (lagrange)

---

add journal interval. (5min to 1 min)

auto convert to jpg and compress.


