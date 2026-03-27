You can predict ahead as if the user will accept the suggestion.
humility

readme · roadmap · notes

---

patchright.

connect (patchright) ux (browser popup)

sessions: headless true get detected. false and window tricks wont work on wayland. (low importance)

---

patchright.

cloudflare turnstile passed automatically. (?)

---

history.

https://prompt.16x.engineer/

---

google ai.

on google ai mode you could only

- send
- continue

not mentioning switching between edits/branches, you could not even edit.

maybe that's enough. maybe.

well i would say the ux of google is always impressive...

beyond markdown.

---

google ai.

dont think too much about ui.

copy google ai mode layout.

about theme. simple. let user add their own css/extension/components.

think whether to use tailwind.

1. cursor: google 4 colors when empty (upd: and hanging). blue when typing. (upd: wait! when you move your cursor left right, the rendered cursor does not move! holyshit. you should expect every possible move of the user. like typing when not focusing. like esc.)
2. progressive disclosure: clear input and send appear only when not empty.

(although its features are reserved. e.g. no exporting, copying markdown. no editing.)

when you hold a file ready to drop, the input component is surrounded by vibrant google colors and shows invitation.

google designers are really special. they think different. for block quotes, you dont use a think line on the left, you dont use quotation mark, you dont use serif italic plus indentation/center alignment, you use a rounded rect with primary bg variant and render inside as usual.

upd: even if user ctrl v text it should listen. chatgpt does not offer this.

---

manus.

manus definitedly have some built in knowledge.

like "..." unless explicitly asked. "..." by default.

it leverages some best practices (not really).

like show prob/confidence after replying, custom xml format (prompt engineering), imagine 3 and pick 1.

chinese love cheating/reward hacking.

---

google ai.

on google ai mode, when i click a link, esp "quick access from the web",

it should open on the same page. like normal google.

---

google ai.

although the implementation might be simple, just a predefined set of mdx components across a range of fields.

but google ai mode could really render the layout pretty well.

it could also render interactive elements. not just "run code", but playgrounds like josh ones.

---

google ai.

it does not hold the data or state in the url.

it contains the query. you will regenerate the first message when refreshing. the conversation is lost.

although you can create a shareable link (then it's the conversation id). (but it's confusing. does it update? does it continue? does it export?)

---

vscode log.

```
2026-03-16 20:09:34.478 [info] [Window] Started local extension host with pid 366127.
2026-03-16 20:09:35.794 [error] [Window] [Extension Host] (node:366127) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `exe --trace-deprecation ...` to show where the warning was created)
2026-03-16 20:09:36.145 [info] [Window] MCP Registry configured: https://api.mcp.github.com
2026-03-16 20:09:36.343 [info] [Cloud Changes] Prompting to enable cloud changes, has application previously launched from Continue On flow: false
2026-03-16 20:09:36.363 [info] [Window] Settings Sync: Account status changed from uninitialized to unavailable
2026-03-16 20:09:37.336 [info] [Window] [perf] Render performance baseline is 28ms
2026-03-16 20:09:41.032 [info] [Window] Auto updating outdated extensions. dbaeumer.vscode-eslint, esbenp.prettier-vscode, monokai.theme-monokai-pro-vscode, ms-python.python, ms-python.vscode-pylance, rust-lang.rust-analyzer, yzhang.markdown-all-in-one
2026-03-16 20:09:47.257 [error] [Window] An unknown error occurred. Please consult the log for more details.
2026-03-16 21:29:22.697 [error] [Network] #23: https://main.vscode-cdn.net/extensions/chat.json - error GET Failed to fetch
2026-03-16 21:29:22.697 [warning] [Window] Failed to fetch chat participant registry Failed to fetch
2026-03-17 01:17:34.607 [warning] [Window] Ignoring the error while validating workspace folder file:///home/fira/Documents/f/a - Error: ENOENT: no such file or directory, stat '/home/fira/Documents/f/a'
2026-03-17 02:04:35.542 [error] [Window] An unknown error occurred. Please consult the log for more details.
2026-03-17 18:41:25.461 [error] [Window] Error: Unable to resolve resource data:image/png%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAflBMVEX/XgAgHB0dGx0AFx4tHxzMTwn1WwD/YQAaGx0OGR4YGh2IOhESGh0AGB0VGh4SGR7BSwudQBC6SQxFJxo1IhskHhwAEx%2BNOxIeHRyyRw3rWATkVgXZUwhVKxnSUQhuMhd6NhOBNxQ7JBqUPRGmQw9iLxhnMBZ1NBZbLBlKJxk8C7FfAAAELklEQVR4nO2Z67aiOBCFMcGEQECuXrgpiJfz/i84AfUIId3tmSlg9azsv7qsz6pNVSUYhpaWlpaWlpaWltZ/Ew12y8Y/uO6ZLhmfIcSb5eL7CVqt0L5ZKAfUN62VEOKHRQhEfHvVyUoOS8TPX/FbAn/%2BHPjv%2BILAmj0H6358QWDO7YMjXg1kWeG8AOTCJYIknDcH6Z1JBGY5cxXucg5W/rwAoxzYcT5zFQqZoM5mBRAEUhU2UT4vQRl7QwIekVkBaCYTbKJ5q0DXtZyDIp00Yi6nuIxtiSCakiCLC6nlUmkqiCoUE1bhzLz9MRs%2B7b5MwKPJ4meuWIDY/pz2EWiZSARsMh%2Bcus6D8H1QBzrOwWWap7FbQruWx479OgsfWHIOpiAgx3frZcmuVwcaJhIBr%2BAJaNhvvIgV/eE3IvBu4IOJSHm2t9fyTee7aEiAT8A5oI3U88QTH1fG63/SQCZAwMfGvLZkAFGHuCEvhIYPCZBbgQLs8Ci%2BkOUeX5vYKAeIg%2BYgv3qjGnR1ML%2BLfZZzYFeQTqTh3UMKAsTq1wE5cKXP8A7UieTsMhWC5d6edXDkKlgBJIBB05vc95914NWj/QcSIdpCH5nCCCvrgKNDl%2B3dMAfDng0iEiClFWx%2BafsScXqrMnKhu1ErmlXuuCUIedhp/%2B77eUV7Z5qDAvFrZR1W7Cug1Di5r7KcJwnfqYmZisDCtRhR1aNhuMGEByWaO66yL9lJlfrd2MSn6cJ38guusoLoS3FbH3aD81%2B%2BJopkUqOJuIJghdr4Xg0W3qBFcnd8g44gaH7aKusgzBCv4QAMjGyGcR2UqSFB0PxuKR9JG/K%2BZI2fDudF1eQSA2kSxXxgkAsZ3X0/cTb3zK%2BqJAN7pVUi18GqQQ8Gl/7vI4th69b0bUn9y7AvIQR6ZZZHcpXRhpn3KiTftiQH3q/D5gIZ3whVRu9sGQVl9rAEJU6y%2Bf6Mw07As7LpPm35dWryRyLWV/zMFIZ9h0EK5QryYmBeEjl%2BSrq%2B9HQgbAJSrhx8vWoIWybH1pZZ3X6VA89AX7mOyxCeaxYnx2zfoCDYmzJ6U49%2BRSI2m/abmyPwEF6fYow96zMKIbf882/%2BVHlwrRP2Oy%2B%2BZU9yM0BpFu4KjpXb6FBsqrd41Eizw7WdBsrp9xKKJ6jAG4Ia/vlaq49HzwrcJ4z/gCC57yRb/ItEsIkWcVlpc432zB5nAs91XS4sEZ7vlrDlcBDzmeI/GEgWXkzEN2%2BG6S0gQ1BjHdxixp6OYLCn8Q8hhC2r%2BHEcc2d%2Bb/VCECrbmYVM8C6QrT9TGbRriwX%2BvoTu9uZnSh4ehL4mpw5Dn6mzgHeEnkTU%2BeVCqOyDoNdy/wZgtzAAXxwA/E5EA/x1AEubEH4f%2BnEjAo5v0GqLf6DtFfxQQH4o6PhaWlpaWlpaWlpaWlr/f/0DViY%2Bxu94gUsAAAAASUVORK5CYII%3D
    at Ytt.r (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1329:21684)
    at Ytt.r (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1329:21670)
    at async x2t.acquire (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:27:3374)
    at async Ztt.createModelReference (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1329:23003)
    at async qO.resolve (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:548:15389)
    at async B0e.setInput (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:707:81047)
    at async Net.S (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:712:58512)
    at async Net.L (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:712:57072)
    at async Net.openEditor (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:712:56154)
    at async vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:824:23341
    at async Wtt.M (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1310:30829)
    at async Wtt.openCodeEditor (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1310:21806)
    at async Mnt.open (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1376:634)
    at async Rnt.open (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1376:1730)
2026-03-17 18:41:32.460 [error] [Window] Error: Unable to resolve resource data:image/png%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAflBMVEX/XgAgHB0dGx0AFx4tHxzMTwn1WwD/YQAaGx0OGR4YGh2IOhESGh0AGB0VGh4SGR7BSwudQBC6SQxFJxo1IhskHhwAEx%2BNOxIeHRyyRw3rWATkVgXZUwhVKxnSUQhuMhd6NhOBNxQ7JBqUPRGmQw9iLxhnMBZ1NBZbLBlKJxk8C7FfAAAELklEQVR4nO2Z67aiOBCFMcGEQECuXrgpiJfz/i84AfUIId3tmSlg9azsv7qsz6pNVSUYhpaWlpaWlpaWltZ/Ew12y8Y/uO6ZLhmfIcSb5eL7CVqt0L5ZKAfUN62VEOKHRQhEfHvVyUoOS8TPX/FbAn/%2BHPjv%2BILAmj0H6358QWDO7YMjXg1kWeG8AOTCJYIknDcH6Z1JBGY5cxXucg5W/rwAoxzYcT5zFQqZoM5mBRAEUhU2UT4vQRl7QwIekVkBaCYTbKJ5q0DXtZyDIp00Yi6nuIxtiSCakiCLC6nlUmkqiCoUE1bhzLz9MRs%2B7b5MwKPJ4meuWIDY/pz2EWiZSARsMh%2Bcus6D8H1QBzrOwWWap7FbQruWx479OgsfWHIOpiAgx3frZcmuVwcaJhIBr%2BAJaNhvvIgV/eE3IvBu4IOJSHm2t9fyTee7aEiAT8A5oI3U88QTH1fG63/SQCZAwMfGvLZkAFGHuCEvhIYPCZBbgQLs8Ci%2BkOUeX5vYKAeIg%2BYgv3qjGnR1ML%2BLfZZzYFeQTqTh3UMKAsTq1wE5cKXP8A7UieTsMhWC5d6edXDkKlgBJIBB05vc95914NWj/QcSIdpCH5nCCCvrgKNDl%2B3dMAfDng0iEiClFWx%2BafsScXqrMnKhu1ErmlXuuCUIedhp/%2B77eUV7Z5qDAvFrZR1W7Cug1Di5r7KcJwnfqYmZisDCtRhR1aNhuMGEByWaO66yL9lJlfrd2MSn6cJ38guusoLoS3FbH3aD81%2B%2BJopkUqOJuIJghdr4Xg0W3qBFcnd8g44gaH7aKusgzBCv4QAMjGyGcR2UqSFB0PxuKR9JG/K%2BZI2fDudF1eQSA2kSxXxgkAsZ3X0/cTb3zK%2BqJAN7pVUi18GqQQ8Gl/7vI4th69b0bUn9y7AvIQR6ZZZHcpXRhpn3KiTftiQH3q/D5gIZ3whVRu9sGQVl9rAEJU6y%2Bf6Mw07As7LpPm35dWryRyLWV/zMFIZ9h0EK5QryYmBeEjl%2BSrq%2B9HQgbAJSrhx8vWoIWybH1pZZ3X6VA89AX7mOyxCeaxYnx2zfoCDYmzJ6U49%2BRSI2m/abmyPwEF6fYow96zMKIbf882/%2BVHlwrRP2Oy%2B%2BZU9yM0BpFu4KjpXb6FBsqrd41Eizw7WdBsrp9xKKJ6jAG4Ia/vlaq49HzwrcJ4z/gCC57yRb/ItEsIkWcVlpc432zB5nAs91XS4sEZ7vlrDlcBDzmeI/GEgWXkzEN2%2BG6S0gQ1BjHdxixp6OYLCn8Q8hhC2r%2BHEcc2d%2Bb/VCECrbmYVM8C6QrT9TGbRriwX%2BvoTu9uZnSh4ehL4mpw5Dn6mzgHeEnkTU%2BeVCqOyDoNdy/wZgtzAAXxwA/E5EA/x1AEubEH4f%2BnEjAo5v0GqLf6DtFfxQQH4o6PhaWlpaWlpaWlpaWlr/f/0DViY%2Bxu94gUsAAAAASUVORK5CYII%3D
    at Ytt.r (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1329:21684)
    at Ytt.r (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1329:21670)
    at async x2t.acquire (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:27:3374)
    at async Ztt.createModelReference (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1329:23003)
    at async qO.resolve (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:548:15389)
    at async B0e.setInput (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:707:81047)
    at async Net.S (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:712:58512)
    at async Net.L (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:712:57072)
    at async Net.openEditor (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:712:56154)
    at async vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:824:23341
    at async Wtt.M (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1310:30829)
    at async Wtt.openCodeEditor (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1310:21806)
    at async Mnt.open (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1376:634)
    at async Rnt.open (vscode-file://vscode-app/usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:1376:1730)

```

(the err is it does not handle data url)

(ofc, properly highlighted)

---

google ai.

google ai use very simple font family.

"google sans, roboto, arial, sans-serif"

"monospace"

that's it. no need to mess up with old best prac.

maybe arial is also not needed. (why not helvetica then? sounds more superior)

upd: idk. suddenly it removes all "google sans" and only keep roboto. droppin update? fixed after refreshing after minutes? weird.

---

opencode.

opencode defines the list of all possible models (strings) in its schema.

btw, it does not use keys from env.

what the hell.

---

google ai.

i see some "class undefined" on google ai mode.

seems not really reliable! poor css in js...

---

google ai.

the whole rendering, like chatgpt's entities, even google's "sources", are llm generated.

google ai might output "sources" literally (in md) instead of make it machine readable (in component).

---

google ai.

the font of prev messages might change if i send a new msg.

weird. though it might be supposed to just check once, dont change.

it does take effect here.

---
