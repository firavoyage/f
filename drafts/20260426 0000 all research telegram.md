#

what version of telegram web do ppl love

Users generally prefer **Telegram Web A** (formerly known as Web Z) for its modern interface and smooth animations, though many still swear by **Telegram Web K** for its stability and specific feature handling. Telegram officially maintains these two versions to ensure high performance across different browsers and devices.

Comparisons of Popular Versions

- **Telegram Web A (Alpha/Z)**:
  - **User Preference**: Often cited as the most "refined" and modern-looking version.
  - **Key Features**: Includes fluid "Material Design" animations, better support for the latest Telegram features, and a look that closely matches the official mobile apps.
  - **Browser Match**: Many users find it runs smoother on [Google Chrome](https://www.google.com/chrome/?gl=us).
- **Telegram Web K (Kotlin)**:
  - **User Preference**: Preferred by those who prioritize a stable, functional workflow over visual flair.
  - **Key Features**: Features a more compact menu and a wider chat screen. It is often reported to handle message syncing and notifications more reliably than Web A in some network conditions.
  - **Browser Match**: Often recommended for [Mozilla Firefox](https://www.mozilla.org/firefox/) users who experience performance issues with Web A.
- **Legacy Version**:
  - **User Preference**: Some "power users" still seek out the old legacy version (accessed via `?legacy=1`) because it allows for tighter window resizing (perfect for split-screen work) and works better with certain corporate VPNs.

Quick Feature Summary

| Feature         | Web A (Modern)                | Web K (Classic/Stable)                 |
| --------------- | ----------------------------- | -------------------------------------- |
| **Interface**   | Vivid animations, flat icons  | Compact menus, 3D-style icons          |
| **Performance** | High (optimized for Chromium) | Lightweight (great for older hardware) |
| **Date Format** | Written out (e.g., Nov 30)    | Numerical (e.g., 11/30/2020)           |
| **Specialty**   | Best for newest features      | Best for workflow stability            |

You can switch between these anytime by going to the [Telegram Web Login](https://web.telegram.org/) page and selecting your preferred version from the settings or menu.

Would you like to know how to **permanently set** one of these versions as your default?

- [link](https://www.slashgear.com/telegram-adds-new-web-apps-and-tap-to-jump-video-26670429/#:~:text=The%20main%20app%20is%20still%20just%20the,you%20might%20never%20get%20to%20use%20again.)\
  Telegram Adds New Web Apps And Tap-To-Jump Video\
  26 Apr 2021 — The main app is still just the Telegram Web App. Then there's the version called Telegram Web Z, and another called Telegram Web K...\
  \
  \
  SlashGear
- [link](https://proxidize.com/blog/telegram-web/#:~:text=It%20%28%20Telegram%20Web%20%29%20does%20not,is%20simpler%20version%20with%20limited%20customization%20options.)\
  Telegram Web: How to Use Telegram in Your Browser?\
  14 Feb 2026 — It ( Telegram Web ) does not require any third-party installation, so the web version of Telegram is much more lightweight than de...\
  \
  \
  Proxidize
- [link](https://ftp.broadwayinfosys.com/blog/telegram-k-version-what-you-need-to-know-1764797731#:~:text=However%2C%20these%20are%20niche%20scenarios%2C%20and%20the,reliable%20experience%20that%20is%20hard%20to%20beat.)\
  Telegram K Version: What You Need To Know\
  4 Dec 2025 — However, these are niche scenarios, and the average user is unlikely to encounter situations where Telegram K is strictly necessar...\
  \
  Broadwayinfosys

Show all

do they share the login secrets

Something went wrong and the content wasn't generated.

do they share the login secrets

No, they do not share login secrets. Although they serve the same account and share the official `web.telegram.org` domain, **Telegram Web A** and **Web K** are treated by the system as separate "active sessions" or devices.

Key Security & Sync Details

- **Independent Sessions**: Logging into Web A will **not** automatically log you into Web K. You must verify each one separately using a QR code or a phone number verification code.
- **Separate Storage**: Each version stores its own local session data (like temporary cache and local encryption keys) in your browser’s "Local Storage" or "IndexedDB". Because they use different internal tech stacks, they cannot read each other's data.
- **Remote Management**: Since they are distinct sessions, you can see both listed individually under **Settings > Devices** in your mobile app. This allows you to remotely log out of one (e.g., Web K) while keeping the other (e.g., Web A) active.
- **Shared Cloud Content**: While the "login secrets" (session keys) are separate, both versions sync your **Cloud Chats** in real-time. However, neither version supports **Secret Chats**, as those encryption keys are stored exclusively on your primary mobile device.

Security Best Practices

To ensure your account stays secure across different web versions:

- **Two-Step Verification (2FA)**: Always enable a [Cloud Password](https://telegram.org/blog/sessions-and-2-step-verification) in your settings. This requires a permanent password in addition to the login code whenever you switch between Web A and Web K.
- **Official URL Only**: Ensure you are always on the official Telegram Web site to avoid phishing attempts designed to steal your login codes.

Would you like to know how to **check all your active web sessions** to see which versions are currently logged in?

- [link](https://www.reddit.com/r/Telegram/comments/mzicwm/what%5Fis%5Fthe%5Fdifference%5Fbetween%5Fwebktelegramorg/#:~:text=They%20are%20written%20in%20different,%E2%80%A2%205y%20ago)\
  What is the difference between webk.telegram.org and webz ...\
  27 Apr 2021 — They are written in different technologies and by different teams. There are source codes on the page https://telegram.org/apps#so...\
  Reddit·r/Telegram
- [link](https://undetectable.io/blog/telegram-web/#:~:text=The%20web%20version%20consumes%20minimal,steal%20login%20codes%20and%20passwords.)\
  Essential Guide to Telegram Web - Undetectable\
  18 Feb 2026 — How to Log into Telegram Web. Before accessing Telegram Web, you need an existing telegram account created through the mobile app ...\
  Undetectable Browser
- [link](https://www.adspower.com/blog/telegram-web-login-vs-telegram-desktop-login#:~:text=Compared%20to%20the%20desktop%20version,accessed%20through%20the%20web%20version.)\
  Can You Use Telegram on PC: Telegram Web Login vs ...\
  23 Dec 2024 — Limitations of Telegram Web. While Telegram Web provides a comprehensive set of features that make it a powerful messaging platfor...\
  AdsPower

Show all

how long does a login on web last

A Telegram Web session is designed to last <mark style="border-radius: 4px; background-size: 200% 100%; padding: 0px 2px; animation: 0.75s cubic-bezier(0.05, 0.7, 0.1, 1) 0.25s 1 normal forwards running highlight-animation;"><strong>indefinitely</strong></mark> as long as you use it occasionally and don't manually log out. Unlike banking apps, it does not have a short automatic timeout for security.

However, there are three main reasons a login might end:

1\. Inactivity Termination

By default, Telegram is set to automatically terminate sessions that haven't been used for a long time. You can view or change this setting in the mobile app under **Settings > Privacy and Security > Devices > If inactive for**.

- **Default**: Usually **6 months**.
- **Options**: You can set it to **1 week, 3 months, 6 months, or 1 year**. If you don't open the specific web version within that timeframe, the session expires.

2\. Security "Recently Logged In" Restrictions

If you log in to Telegram Web from a **new device**, you cannot immediately use it to terminate other sessions.

- **Wait Period**: You must wait **24 hours** before the new web session is "trusted" enough to log out your other devices or browsers.

3\. Browser-Specific Issues

Your login "secrets" are stored in your browser's local cache. Your session will end if:

- You use **Incognito/Private mode** (the session ends the moment you close the tab).
- You manually **clear your browser cache** or "Site Data".
- You have a "cleaner" app or browser setting that automatically wipes data when the browser closes.

Would you like to know how to **manually end a web session** from your phone if you think you left it logged in on a public computer?

- [link](https://www.reddit.com/r/Telegram/comments/658om0/telegram%5Fwont%5Flet%5Fme%5Fend%5Fpast%5Factive%5Fsessions/#:~:text=get%20an%20error.-,%22For%20security%20reasons%2C%20you%20can't%20terminate%20older%20sessions,15%20minutes%20at%20the%20MOST.\&text=I%20know%20I'm%20a,you%20ever%20find%20a%20solution?\&text=The%20old%20phone%20is%20gone,see%20the%20current%20phone%20now.\&text=The%20iOS%20app%20gives%20me%20the%20same%20exact%20message.\&text=No%20more%20advices%20for%20you,should%20enable%202FA%20authentication%20though.\&text=Already%20did%20that%20from%20my,such%20a%20massive%20security%20flaw.)\
  Telegram won't let me end past active sessions! - Reddit\
  13 Apr 2017 — "For security reasons, you can't terminate older sessions from a device where you've recently logged in. You can use an older sess...\
  Reddit·r/Telegram
- [link](https://www.reddit.com/r/Telegram/comments/17wc4jq/telegram%5F24%5Fhour%5Fwait%5Fperiod%5Ffor%5Fterminating/#:~:text=This%20has%20nothing%20to%20do,%E2%80%A2%202y%20ago)\
  Telegram 24 hour wait period for terminating session any work ...\
  16 Nov 2023 — \* Tips for managing Telegram sessions. \* How to disable Telegram account. \* Telegram session termination meaning. \* Best Telegram ...\
  Reddit·r/Telegram
- [link](https://www.reddit.com/r/Telegram/comments/1gn6ry1/telegram%5Fautomatically%5Fkeeps%5Flogging%5Fout/#:~:text=Check%20your%20active%20sessions%20and,t%20have%20a%20compromised%20device.\&text=Nope%20my%20device%20is%20the%20only%20session%20rn.\&text=It%20could%20be%20your%20device,also%20removing%20the%20session%20data.\&text=But%20this%20only%20started%20from,that%20it%20was%20perfectly%20fine.\&text=Hi%20im%20recently%20facing%20this,you%20able%20to%20solve%20it?)\
  Telegram automatically keeps logging out - Reddit\
  9 Nov 2024 — Check your active sessions and make sure there are no odd ones. I would even go so far as to forcibly log out all of the sessions ...\
  Reddit·r/Telegram

Show all

#

im trying to automate a web app. when i click somewhere, it has effect. but idk which element i could apply click. how to know

To identify which element is receiving your click, you can use built-in browser tools to monitor events in real-time or inspect existing listeners.

1\. Monitor All Clicks in Real-Time

The fastest way to see exactly what element triggers an effect when you click it is to use the **Console** in Chrome DevTools:

- Open DevTools (**F12** or **Ctrl+Shift+I**).
- Go to the **Console** tab.
- Type `monitorEvents(window, 'click')` and press Enter.
- Now, click on the web app. The console will log every click event. Expand the logged event and look for **`target`** to see the specific HTML element that was clicked.
- To stop monitoring, type `unmonitorEvents(window)`.

2\. Inspect "Event Listeners"

If clicking "somewhere" works but the element isn't obvious (like a hidden overlay), you can check which elements have code attached to them:

- Right-click the area and select **Inspect**.
- In the DevTools sidebar, click the **Event Listeners** tab.
- Look for "click". If you see many, uncheck **"Ancestors"** to see only the listeners directly on that specific element.
- You can click the link next to the handler to see the exact JavaScript code that runs.

3\. Use the "Event Listener Breakpoint"

To pause the app exactly when the click happens:

- Go to the **Sources** tab in DevTools.
- On the right sidebar, expand **Event Listener Breakpoints**.
- Expand **Mouse** and check **click**.
- Perform the click on your app. The browser will "freeze" on the line of code that responds to that click, highlighting the relevant element.

4\. Locate the Element for Automation

Once you've identified the element (e.g., `<button id="submit-btn">`), you can target it in your automation script (like Selenium or Playwright) using:

- **ID**: The most reliable (e.g., `By.id("the_id")`).
- **CSS Selectors**: Useful for elements with specific classes.
- **XPath**: A powerful fallback if no IDs are available.

Would you like help writing the **CSS selector** or **XPath** for a specific element you've found?

- [link](https://stackoverflow.com/questions/23472334/how-to-find-what-code-is-run-by-a-button-or-element-in-chrome-using-developer-to)\
  How to find what code is run by a button or element in Chrome ...\
  5 May 2014 — \* 4. I usually use the Visual Event bookmarklet. It detects click events bound by popular libraries and creates an overlay of the ...\
  Stack Overflow
- [link](https://stackoverflow.com/questions/7338193/using-chrome-how-to-find-to-which-events-are-bound-to-an-element#:~:text=Right%20click%20on%20the%20element,then%20click%20'Show%20function%20definition')\
  Using Chrome, how to find to which events are bound to an ...\
  7 Sept 2011 — 9 Comments. ... Getting closer, but most of the results in there are pointing to the line 16 of... jquery. min. js :( ( I understa...\
  Stack Overflow
- [link](https://www.reddit.com/r/learnjavascript/comments/1gvzlsb/identifying%5Felement%5Fon%5Fa%5Fpage%5Ffor%5Fa%5Fclick%5Ffunction/#:~:text=jbrowning82,then%20choose%20%22Inspect%20element%22.)\
  Identifying Element on a page for a click function - Reddit\
  20 Nov 2024 — Use the dev tools to figure out things about the element. ... Could you be a bit more specific with the link I sent? Sorry but to ...\
  Reddit·r/learnjavascript

Show all

what does istrusted mean. how to reproduce

In JavaScript, `isTrusted` is a read-only property that tells you if an event was triggered by a **real human** or by **code**.

- **`true`**: The event was generated by a user action, like a physical mouse click or a key press.
- **`false`**: The event was triggered programmatically via scripts, such as using `element.click()` or `dispatchEvent()`.

How to Reproduce `isTrusted: false` (Programmatic)

To see `false` in your automation or console, simply trigger an event using JavaScript.

javascript

```
const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
  console.log('Is this click trusted?', e.isTrusted);
});

// This will log "false"
btn.click();
```

Use code with caution.

How to Reproduce `isTrusted: true` (Trusted)

Generating a `true` value is harder because it’s a security feature designed to prevent spoofing. You can't just set `event.isTrusted = true` in a script; the browser will ignore it. To reproduce it, you have three main options:

1. **Manual Interaction**: Simply click the element yourself with your mouse.
2. **OS-Level Simulation**: Use tools like **PyAutoGUI** (Python) that control the actual mouse cursor at the operating system level rather than injecting scripts into the browser.
3. **Advanced Automation Frameworks**:

- **Playwright / Puppeteer**: These tools can bypass the check by using the Chrome DevTools Protocol (CDP) to send "native" hardware-level events to the browser.
- **Chrome Debugger API**: If you are writing a Chrome Extension, you can use the [chrome.debugger API](https://github.com/cnleo/IsTrusted-event-Debugger-API) to dispatch trusted events.

**Pro Tip:** If a website is blocking your automation because of this flag, it is often easier to **override the site's JS** via [DevTools Local Overrides](https://stackoverflow.com/questions/49518959/javascript-trigger-an-inputevent-istrusted-true) to remove the `if (!event.isTrusted)` check entirely rather than trying to fake the property.

Are you using a specific automation tool like **Selenium** or **Playwright** that is currently failing this check?

- [link](https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted#:~:text=The%20isTrusted%20read%2Donly%20property,the%20isTrusted%20property%20to%20false%20.)\
  Event: isTrusted property - Web APIs - MDN Web Docs\
  8 Apr 2026 — Event: isTrusted property. ... This feature is well established and works across many devices and browser versions. It's been avai...\
  MDN Web Docs
- [link](https://www.bennadel.com/blog/4873-exploring-event-istrusted-in-javascript.htm#:~:text=Yesterday%2C%20in%20my%20post%20about,and%20see%20the%20isTrusted%20state:)\
  Exploring Event.isTrusted In JavaScript - Ben Nadel\
  21 Feb 2026 — Yesterday, in my post about making table rows clickable, part of my logic included checking the event. isTrusted property. This is...\
  Ben Nadel
- [link](https://javascript.plainenglish.io/event-istrusted-safeguard-your-site-from-bots-cf10eca6e604#:~:text=So%20the%20most%20common%20strategy,user/script%2Dgenerated%20events.)\
  Event.isTrusted, Safeguard Your Site from Bots\
  3 Apr 2022 — Get Abhimanyu Chauhan's stories in your inbox. The isTrusted read-only property of the Event interface is a boolean value that is ...\
  JavaScript in Plain English

Show all

#

What will happen if I put someone in my contacts and then open tg

If you add someone to your phone contacts and then open Telegram, the app will automatically **sync your contact list** with its servers to check if that person has a Telegram account.

Here is exactly what happens:

1\. The Person is Added to Your Telegram List

If the person you added already uses Telegram, they will immediately appear in your **Telegram Contacts** tab. You will see their profile picture and status (e.g., "last seen recently") according to their privacy settings.

2\. Notification Behavior

- **You get a notification:** You will receive a notification and a new chat will appear saying "\[Contact Name] joined Telegram!" if they just registered, or they will simply appear in your list if they were already there.
- **They usually do NOT get a notification:** Simply adding someone to your phone contacts does **not** trigger a notification for them. Telegram only notifies people when _you_ join Telegram (if they already have your number saved) or if you start a new chat with them.

3\. Visibility and Privacy

- **Phone Number Visibility:** By default, your phone number is only visible to people who already have it saved in their own contacts. If you add someone who does _not_ have your number, they generally won't see your number unless you message them first and your settings allow it.
- **Username Discovery:** If they don't have your number but have a public username, adding them to your phone contacts helps Telegram link that number to their account so you can find them easily.

Summary Table: What they see

| If...                          | Will they be notified?          | Will they see your number?              |
| ------------------------------ | ------------------------------- | --------------------------------------- |
| You add them but don't message | **No**                          | **No** (unless they already have yours) |
| You start a chat with them     | **Yes**                         | Only if your privacy settings allow it  |
| They already have your number  | **No** (if your account is old) | **Yes**, usually                        |

If you want to keep your contact list private, you can go to **Settings > Privacy and Security > Data Settings** and toggle off **Sync Contacts** or select **Delete Synced Contacts** to clear previously uploaded numbers.

Would you like to know how to **hide your phone number** from specific contacts before you message them?

- [link](https://www.airdroid.com/parent-control/does-telegram-show-phone-number/)\
  Does Telegram Show Your Phone Number? (2025 Privacy Guide)\
  25 Jul 2025 — 1Your Contacts. According to Telegram, your number is only visible to your contacts by default. That said, if somebody is stored i...\
  AirDroid
- [link](https://transcriu.bnc.cat/mediawiki/index.php/Telegram%5FContact%5FPermissions:%5FControl%5FWho%5FSees%5FYour%5FInfo%5FInstantly#:~:text=When%20you%20grant%20Telegram%20access%20to%20your,seamless%20messaging%2C%20voice%20calls%2C%20and%20video%20calls.)\
  Telegram Contact Permissions: Control Who Sees Your Info Instantly\
  When you grant Telegram access to your contacts, the app imports phone numbers to determine who amongst your acquaintances is reac...\
  Transcriu-me!! ·
- [link](https://www.reddit.com/r/Telegram/comments/1j4p5lc/does%5Ftelegram%5Fsend%5Fthe%5Fcontact%5Fnotification%5Fwhen/#:~:text=The%20contacts%20that%20will%20get,order%20to%20get%20the%20notification.\&text=So%20you%20are%20confirming%20it,accidentally%20synced%20contacts%20just%20now?\&text=If%20they%20have%20ur%20contact,their%20contact%2C%20it%20will%20notify.\&text=Not%20sure%20if%20they%20get,list%20as%20a%20known%20contact.)\
  Does telegram send the contact notification when you sync your ...\
  6 Mar 2025 — The contacts that will get the notification are basically the contacts that you can see that also have telegram. They have to have...\
  Reddit·r/Telegram

Show all

what if their number is leaked or someone pulls a bunch of numbers they dont know

If your phone number is leaked or someone adds a massive list of random numbers to their phone contacts and opens Telegram, they can essentially "discover" your account if your privacy settings are not tightened.

Here is what happens and how to stop it:

How Discovery Works

- **The "Joining" Notification**: If a stranger has your number in their contacts and you join Telegram (or already have an account), they may see a notification stating "\[Your Name] joined Telegram".
- **Mass Discovery**: Malicious actors or scammers can bulk-upload thousands of numbers to their device contacts. Telegram then automatically matches those numbers with existing accounts, allowing the person to see your **Profile Picture**, **Bio**, and **Username** even if they don't know you.

Essential Privacy Settings

To prevent strangers from finding you even if they have your leaked number, you must change these specific settings immediately:

- **Who can find me by my number?**
  - Go to **Settings > Privacy and Security > Phone Number**.
  - Change "Who can see my phone number" to **Nobody**.
  - **Crucial Step:** Once set to "Nobody," a new option appears: **"Who can find me by my number"**. Set this to **My Contacts**. This ensures that even if a stranger has your number, your profile won't appear for them unless _you also_ have their number saved.
- **Syncing History**
  - If you've previously synced contacts from a device where you had those random numbers, they will stay in Telegram's cloud.
  - Go to **Privacy and Security > Data Settings** and select **Delete Synced Contacts** to clear this cloud memory.
- **Profile Forwarding**
  - Change **Forwarded Messages** to **Nobody** or **My Contacts**. This prevents strangers from clicking your name to find your profile if a mutual contact forwards one of your messages.

Risks of Exposure

If you do not lock these settings down, a leaked number can lead to:

- **Targeted Scams**: Scammers can see you are active and send phishing links or impersonate people you might know.
- **Identity Linking**: If your Telegram username is the same as your other social media handles, they can link your leaked phone number directly to your online identity.

Would you like a step-by-step guide on how to **set up a two-step verification password** to prevent someone from hijacking your account with just your number?

- [link](https://www.reddit.com/r/Telegram/comments/1bwj790/random%5Fpeople%5Fpopping%5Fup%5Fas%5Fcontacts%5Fon%5Ftelegram/#:~:text=%E2%80%A2%202y%20ago-,Go%20to%20%22Settings%20%2D%3E%20Privacy%20and%20Security%20%2D%3E%20Devices,%E2%80%A2%201y%20ago)\
  Random people popping up as contacts on telegram, what is ...\
  5 Apr 2024 — Go to "Settings -> Privacy and Security -> Devices" and now check here if there are any devices listed that you are not familiar w...\
  Reddit·r/Telegram
- [link](https://bugs.telegram.org/c/226#:~:text=Log%20In,Show%207%20more%20comments)\
  Unknown people appear in the contact list\
  (Incorrect?) ... If you have contacts in your Telegram account which you don't recognize, you have most likely logged in on anothe...\
  Telegram Messenger
- [link](https://www.reddit.com/r/Telegram/comments/l1zces/can%5Fi%5Fprevent%5Fpeople%5Fwith%5Fmy%5Fphone%5Fnumber%5Ffrom/#:~:text=Yes%2C%20you%20can%20set:%20%2A%20Privacy%20and,can%20find%20my%20phone%20number%20%28My%20contacts%29.)\
  Can I prevent people with my phone number from seeing that I'm on ...\
  21 Jan 2021 — Yes, you can set: \* Privacy and Security -> Phone Number (Nobody). \* Privacy and Security->Phone number->Who can see my phone numb...\
  Reddit·r/Telegram

Show all

i suppose there is a limit. about how many contacts do tg (technically at least implicitly) allow to map

Telegram does not officially disclose a hard "mapping" limit, but technical testing and community data indicate it uses a **multi-tiered system** to prevent mass discovery and bulk number checking.

1\. The Initial "Bulk" Limit

When you first sync or import contacts, Telegram typically allows a large initial batch to be processed.

- **Capacity:** Reports suggest an initial limit of approximately **5,000 contacts**.
- **Behavior:** If you upload a list larger than this at once, the system may only sync the first 5,000 and ignore the rest, or it may trigger a temporary "flood" restriction.

2\. Daily Import Restraints

Once that initial "buffer" is used, Telegram limits how many _new_ numbers you can add per day to stop scanners from mapping the entire phone network.

- **Daily Quota:** For most accounts, this is restricted to roughly **100–200 new contacts per day**.
- **Integration Limits:** If you use third-party CRM or API tools, Telegram may impose even stricter limits, sometimes as low as **15–20 new contacts per day** to prevent automated scraping.

3\. "Flood" Penalties

If the system detects you are cycling through numbers (adding thousands, checking them, then deleting and adding more), it will trigger a **"Flood Error"** or a temporary block on the contact sync feature.

- **Restriction Duration:** These bans typically last **24 hours**, but repeated violations can lead to permanent account restrictions where you can only message "mutual contacts" (people who also have your number saved).
- **The "Slow-Down" Effect:** If you hit the limit, your daily quota might be slashed for the following days (e.g., dropping from 15 to only 5 new contacts per day).

Summary of Technical Limits

| Activity                 | Estimated Limit   |
| ------------------------ | ----------------- |
| **Initial Bulk Import**  | ~5,000 numbers    |
| **Daily New Additions**  | 100 – 200 numbers |
| **API/CRM Integrations** | 15 – 40 numbers   |
| **User Search Requests** | ~200 per day      |

Telegram intentionally keeps these numbers fluid to stay ahead of automated scripts. If you are concerned about your number being "mapped" by a leak, ensuring your **"Who can find me by my number"** setting is set to **"My Contacts"** is the only way to bypass this technical mapping entirely.

Are you worried about a **specific leak** or just curious about how these "mapping" scripts work?

- [link](https://help.chatapp24.kz/en/wiki%5Fcontent/guidelines-for-working-with-telegram/#:~:text=For%20already%20registered%20accounts%2C%20synchronization,Contact%20Synchronization%20for%20iOS)\
  Rules for Working in Telegram - Chatapp\
  There is a limit on user searches of approximately 200 requests per day. This means you can find and message no more than 200 user...\
  help.chatapp24.kz
- [link](https://help.e-chat.tech/en/telegram/telegram-restrictions-and-limits#:~:text=For%20the%20initiation%20of%20dialog,number%20can%20be%20blocked%20permanently.)\
  Telegram Restrictions and Limits - E-chat\
  For the initiation of dialog with contacts with whom there has been no previous correspondence, we recommend not to exceed 20 cont...\
  help.e-chat.tech
- [link](https://whatcrm.gitbook.io/whatcrm-docs/english/useful-articles/telegram-restrictions)\
  Telegram restrictions | User Guide | Whatcrm Docs - GitBook\
  16 Apr 2024 — Limit on Adding New Contacts. If you initiate the first contact with a client in CRM, the integration module adds a new contact to...\
  whatcrm.gitbook.io

Show all

