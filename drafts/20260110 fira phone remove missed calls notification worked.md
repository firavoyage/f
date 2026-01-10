<!-- https://chatgpt.com/c/6961f258-ed2c-832a-9444-deca0a718ae4 -->

<!-- worked. -->

# .

```
fira@Fira ~ % adb shell dumpsys notification | grep -E "pkg=|tickerText=" 

    NotificationRecord(0x07eef771: pkg=com.android.server.telecom user=UserHandle{0} id=3 tag=MissedCallNotifierImpl importance=3 key=0|com.android.server.telecom|3|MissedCallNotifierImpl|1001: Notification(channel=TelecomMissedCalls shortcut=null contentView=null vibrate=null sound= tick defaults=0x4 flags=0x11 color=0x00000000 vis=PRIVATE publicVersion=Notification(channel=null shortcut=null contentView=null vibrate=null sound=null defaults=0x0 flags=0x10 color=0x00000000 vis=PRIVATE)))
      icon=Icon(typ=RESOURCE pkg=com.android.server.telecom id=0x0108007f)
      tickerText=Missed C...
    NotificationRecord(0x0660d1c9: pkg=android user=UserHandle{-1} id=26 tag=null importance=2 key=-1|android|26|null|1000: Notification(channel=DEVELOPER_IMPORTANT shortcut=null contentView=null vibrate=null sound=null tick defaults=0x0 flags=0x2 color=0xff607d8b vis=PUBLIC))
      icon=Icon(typ=RESOURCE pkg=android id=0x01080d0f)
      tickerText=USB debu...
    NotificationRecord(0x0f0e92e5: pkg=android user=UserHandle{0} id=17305200 tag=null importance=2 key=0|android|17305200|null|1000: Notification(channel=VPN shortcut=null contentView=null vibrate=null sound=null defaults=0x0 flags=0x2 color=0x00000000 vis=PRIVATE))
      icon=Icon(typ=RESOURCE pkg=android id=0x01080e70)
      tickerText=null
    NotificationRecord(0x014814ae: pkg=com.rom1v.sndcpy user=UserHandle{0} id=1 tag=null importance=2 key=0|com.rom1v.sndcpy|1|null|11884: Notification(channel=sndcpy shortcut=null contentView=null vibrate=null sound=null defaults=0x0 flags=0x62 color=0x00000000 actions=1 vis=PRIVATE))
      icon=Icon(typ=RESOURCE pkg=com.rom1v.sndcpy id=0x7f010001)
      tickerText=null
    NotificationRecord(0x0536d7d8: pkg=com.github.metacubex.clash.meta user=UserHandle{0} id=2131296582 tag=null importance=2 key=0|com.github.metacubex.clash.meta|2131296582|null|11879: Notification(channel=clash_status_channel shortcut=null contentView=null vibrate=null sound=null defaults=0x0 flags=0xa color=0xff1e4376 vis=PRIVATE))
      icon=Icon(typ=RESOURCE pkg=com.github.metacubex.clash.meta id=0x7f0800ab)
      tickerText=null
    NotificationRecord(0x0ff706f8: pkg=com.iflytek.speechsuite user=UserHandle{0} id=1 tag=null importance=2 key=0|com.iflytek.speechsuite|1|null|10139: Notification(channel=com.iflytek.speechsuite shortcut=null contentView=null vibrate=null sound=default defaults=0x1 flags=0x62 color=0x00000000 vis=PRIVATE))
      icon=Icon(typ=RESOURCE pkg=com.iflytek.speechsuite id=0x7f05002e)
      tickerText=null
    NotificationRecord(0x0cf33e82: pkg=android user=UserHandle{-1} id=27 tag=null importance=1 key=-1|android|27|null|1000: Notification(channel=USB shortcut=null contentView=null vibrate=null sound=null tick defaults=0x0 flags=0x2 color=0xff607d8b vis=PUBLIC))
      icon=Icon(typ=RESOURCE pkg=android id=0x01080d2e)
      tickerText=USB MTP ...
      manualRule=ZenRule[id=null,enabled=TRUE,snoozing=false,name=null,zenMode=ZEN_MODE_NO_INTERRUPTIONS,conditionId=null,condition=null,pkg=null,component=null,configActivity=null,creationTime=0,enabler=null,zenPolicy=null,modified=false]
      automaticRules=ZenRule[id=EVENTS_DEFAULT_RULE,enabled=FALSE,snoozing=false,name=Event,zenMode=ZEN_MODE_IMPORTANT_INTERRUPTIONS,conditionId=condition://android/event?userId=-10000&calendar=&reply=1,condition=Condition[state=STATE_FALSE,id=condition://android/event?userId=-10000&calendar=&reply=1,summary=...,line1=...,line2=...,icon=0,flags=2],pkg=android,component=ComponentInfo{android/com.android.server.notification.EventConditionProvider},configActivity=null,creationTime=0,enabler=null,zenPolicy=null,modified=false]
                     ZenRule[id=EVERY_NIGHT_DEFAULT_RULE,enabled=FALSE,snoozing=false,name=Sleeping,zenMode=ZEN_MODE_IMPORTANT_INTERRUPTIONS,conditionId=condition://android/schedule?days=1.2.3.4.5.6.7&start=22.0&end=7.0&exitAtAlarm=true,condition=Condition[state=STATE_FALSE,id=condition://android/schedule?days=1.2.3.4.5.6.7&start=22.0&end=7.0&exitAtAlarm=true,summary=...,line1=...,line2=...,icon=0,flags=2],pkg=android,component=ComponentInfo{android/com.android.server.notification.ScheduleConditionProvider},configActivity=null,creationTime=0,enabler=null,zenPolicy=null,modified=false]
      manualRule=ZenRule[id=null,enabled=TRUE,snoozing=false,name=null,zenMode=ZEN_MODE_NO_INTERRUPTIONS,conditionId=null,condition=null,pkg=null,component=null,configActivity=null,creationTime=0,enabler=null,zenPolicy=null,modified=false]
      automaticRules=ZenRule[id=EVENTS_DEFAULT_RULE,enabled=FALSE,snoozing=false,name=Event,zenMode=ZEN_MODE_IMPORTANT_INTERRUPTIONS,conditionId=condition://android/event?userId=-10000&calendar=&reply=1,condition=Condition[state=STATE_FALSE,id=condition://android/event?userId=-10000&calendar=&reply=1,summary=...,line1=...,line2=...,icon=0,flags=2],pkg=android,component=ComponentInfo{android/com.android.server.notification.EventConditionProvider},configActivity=null,creationTime=0,enabler=null,zenPolicy=null,modified=false]
                     ZenRule[id=EVERY_NIGHT_DEFAULT_RULE,enabled=FALSE,snoozing=false,name=Sleeping,zenMode=ZEN_MODE_IMPORTANT_INTERRUPTIONS,conditionId=condition://android/schedule?days=1.2.3.4.5.6.7&start=22.0&end=7.0&exitAtAlarm=true,condition=Condition[state=STATE_FALSE,id=condition://android/schedule?days=1.2.3.4.5.6.7&start=22.0&end=7.0&exitAtAlarm=true,summary=...,line1=...,line2=...,icon=0,flags=2],pkg=android,component=ComponentInfo{android/com.android.server.notification.ScheduleConditionProvider},configActivity=null,creationTime=0,enabler=null,zenPolicy=null,modified=false]
      manualRule=ZenRule[id=null,enabled=TRUE,snoozing=false,name=null,zenMode=ZEN_MODE_NO_INTERRUPTIONS,conditionId=null,condition=null,pkg=null,component=null,configActivity=null,creationTime=0,enabler=null,zenPolicy=null,modified=false]
      automaticRules=ZenRule[id=EVENTS_DEFAULT_RULE,enabled=FALSE,snoozing=false,name=Event,zenMode=ZEN_MODE_IMPORTANT_INTERRUPTIONS,conditionId=condition://android/event?userId=-10000&calendar=&reply=1,condition=Condition[state=STATE_FALSE,id=condition://android/event?userId=-10000&calendar=&reply=1,summary=...,line1=...,line2=...,icon=0,flags=2],pkg=android,component=ComponentInfo{android/com.android.server.notification.EventConditionProvider},configActivity=null,creationTime=0,enabler=null,zenPolicy=null,modified=false]
                     ZenRule[id=EVERY_NIGHT_DEFAULT_RULE,enabled=FALSE,snoozing=false,name=Sleeping,zenMode=ZEN_MODE_IMPORTANT_INTERRUPTIONS,conditionId=condition://android/schedule?days=1.2.3.4.5.6.7&start=22.0&end=7.0&exitAtAlarm=true,condition=Condition[state=STATE_FALSE,id=condition://android/schedule?days=1.2.3.4.5.6.7&start=22.0&end=7.0&exitAtAlarm=true,summary=...,line1=...,line2=...,icon=0,flags=2],pkg=android,component=ComponentInfo{android/com.android.server.notification.ScheduleConditionProvider},configActivity=null,creationTime=0,enabler=null,zenPolicy=null,modified=false]
automaticRules={ZenRule[id=EVENTS_DEFAULT_RULE,enabled=FALSE,snoozing=false,name=Event,zenMode=ZEN_MODE_IMPORTANT_INTERRUPTIONS,conditionId=condition://android/event?userId=-10000&calendar=&reply=1,condition=Condition[state=STATE_FALSE,id=condition://android/event?userId=-10000&calendar=&reply=1,summary=...,line1=...,line2=...,icon=0,flags=2],pkg=android,component=ComponentInfo{android/com.android.server.notification.EventConditionProvider},configActivity=null,creationTime=0,enabler=null,zenPolicy=null,modified=false],
ZenRule[id=EVERY_NIGHT_DEFAULT_RULE,enabled=FALSE,snoozing=false,name=Sleeping,zenMode=ZEN_MODE_IMPORTANT_INTERRUPTIONS,conditionId=condition://android/schedule?days=1.2.3.4.5.6.7&start=22.0&end=7.0&exitAtAlarm=true,condition=Condition[state=STATE_FALSE,id=condition://android/schedule?days=1.2.3.4.5.6.7&start=22.0&end=7.0&exitAtAlarm=true,summary=...,line1=...,line2=...,icon=0,flags=2],pkg=android,component=ComponentInfo{android/com.android.server.notification.ScheduleConditionProvider},configActivity=null,creationTime=0,enabler=null,zenPolicy=null,modified=false]},
manualRule=ZenRule[id=null,enabled=TRUE,snoozing=false,name=null,zenMode=ZEN_MODE_NO_INTERRUPTIONS,conditionId=null,condition=null,pkg=null,component=null,configActivity=null,creationTime=0,enabler=null,zenPolicy=null,modified=false]],Diff[]
automaticRules={ZenRule[id=EVENTS_DEFAULT_RULE,enabled=FALSE,snoozing=false,name=Event,zenMode=ZEN_MODE_IMPORTANT_INTERRUPTIONS,conditionId=condition://android/event?userId=-10000&calendar=&reply=1,condition=Condition[state=STATE_FALSE,id=condition://android/event?userId=-10000&calendar=&reply=1,summary=...,line1=...,line2=...,icon=0,flags=2],pkg=android,component=ComponentInfo{android/com.android.server.notification.EventConditionProvider},configActivity=null,creationTime=0,enabler=null,zenPolicy=null,modified=false],
ZenRule[id=EVERY_NIGHT_DEFAULT_RULE,enabled=FALSE,snoozing=false,name=Sleeping,zenMode=ZEN_MODE_IMPORTANT_INTERRUPTIONS,conditionId=condition://android/schedule?days=1.2.3.4.5.6.7&start=22.0&end=7.0&exitAtAlarm=true,condition=Condition[state=STATE_FALSE,id=condition://android/schedule?days=1.2.3.4.5.6.7&start=22.0&end=7.0&exitAtAlarm=true,summary=...,line1=...,line2=...,icon=0,flags=2],pkg=android,component=ComponentInfo{android/com.android.server.notification.ScheduleConditionProvider},configActivity=null,creationTime=0,enabler=null,zenPolicy=null,modified=false]},
manualRule=ZenRule[id=null,enabled=TRUE,snoozing=false,name=null,zenMode=ZEN_MODE_NO_INTERRUPTIONS,conditionId=null,condition=null,pkg=null,component=null,configActivity=null,creationTime=0,enabler=null,zenPolicy=null,modified=false]],Diff[]
    post_frequency{user_id=-1,pkg=android,day=0,count=21,muted=21/21,demoted=19}
    post_frequency{user_id=-1,pkg=android,day=1,count=587,muted=587/587,demoted=585}
    post_frequency{user_id=-1,pkg=android,day=2,count=465,muted=465/465,demoted=461}
    post_frequency{user_id=-1,pkg=android,day=3,count=187,muted=187/187,demoted=185}
    post_frequency{user_id=-1,pkg=android,day=4,count=299,muted=299/299,demoted=296}
    post_frequency{user_id=-1,pkg=android,day=5,count=78,muted=78/78,demoted=76}
    post_frequency{user_id=-1,pkg=android,day=6,count=25,muted=25/25,demoted=23}
    post_frequency{user_id=-1,pkg=android,day=7,count=136,muted=136/136,demoted=134}
    post_frequency{user_id=0,pkg=world.letsgo.booster.android.pro,day=-381,count=2,muted=0/0,demoted=2}
    post_frequency{user_id=0,pkg=android,day=0,count=91,muted=91/91,demoted=91}
    post_frequency{user_id=0,pkg=com.android.server.telecom,day=0,count=1,muted=1/1,demoted=0}
    post_frequency{user_id=0,pkg=com.rom1v.sndcpy,day=0,count=10,muted=10/10,demoted=10}
    post_frequency{user_id=0,pkg=android,day=1,count=1958,muted=1958/1958,demoted=1958}
    post_frequency{user_id=0,pkg=com.android.server.telecom,day=1,count=2,muted=2/2,demoted=0}
    post_frequency{user_id=0,pkg=com.github.metacubex.clash.meta,day=1,count=3,muted=3/3,demoted=3}
    post_frequency{user_id=0,pkg=com.iflytek.speechsuite,day=1,count=3,muted=3/3,demoted=3}
    post_frequency{user_id=0,pkg=com.rom1v.sndcpy,day=1,count=4,muted=4/4,demoted=4}
    post_frequency{user_id=0,pkg=com.termux,day=1,count=3,muted=3/3,demoted=0}
    post_frequency{user_id=0,pkg=nu.gpu.nagram,day=1,count=24,muted=0/3,demoted=0}
    post_frequency{user_id=0,pkg=org.mozilla.firefox,day=1,count=66,muted=66/66,demoted=35}
    post_frequency{user_id=0,pkg=org.videolan.vlc,day=1,count=437,muted=437/437,demoted=437}
    post_frequency{user_id=0,pkg=android,day=2,count=3729,muted=3729/3729,demoted=3729}
    post_frequency{user_id=0,pkg=com.android.server.telecom,day=2,count=2,muted=2/2,demoted=0}
    post_frequency{user_id=0,pkg=com.android.systemui,day=2,count=1,muted=1/1,demoted=0}
    post_frequency{user_id=0,pkg=com.github.metacubex.clash.meta,day=2,count=10625,muted=10625/10625,demoted=10624}
    post_frequency{user_id=0,pkg=com.iflytek.speechsuite,day=2,count=6,muted=6/6,demoted=6}
    post_frequency{user_id=0,pkg=com.rom1v.sndcpy,day=2,count=11,muted=11/11,demoted=11}
    post_frequency{user_id=0,pkg=com.smartisanos.appstore,day=2,count=4,muted=4/4,demoted=4}
    post_frequency{user_id=0,pkg=it.belloworld.mercurygram,day=2,count=40,muted=0/1,demoted=0}
    post_frequency{user_id=0,pkg=me.zhanghai.android.files,day=2,count=5,muted=5/5,demoted=0}
    post_frequency{user_id=0,pkg=nu.gpu.nagram,day=2,count=104,muted=0/2,demoted=0}
    post_frequency{user_id=0,pkg=org.fossify.voicerecorder,day=2,count=2,muted=0/0,demoted=2}
    post_frequency{user_id=0,pkg=org.mozilla.firefox,day=2,count=1,muted=1/1,demoted=0}
    post_frequency{user_id=0,pkg=org.videolan.vlc,day=2,count=243,muted=243/243,demoted=243}
    post_frequency{user_id=0,pkg=tw.nekomimi.nekogram,day=2,count=260,muted=0/10,demoted=1}
    post_frequency{user_id=0,pkg=xyz.nextalone.nagram,day=2,count=88,muted=0/2,demoted=0}
    post_frequency{user_id=0,pkg=android,day=3,count=1298,muted=1298/1298,demoted=1298}
    post_frequency{user_id=0,pkg=com.android.server.telecom,day=3,count=2,muted=2/2,demoted=0}
    post_frequency{user_id=0,pkg=com.iflytek.speechsuite,day=3,count=1,muted=1/1,demoted=1}
    post_frequency{user_id=0,pkg=com.rom1v.sndcpy,day=3,count=10,muted=10/10,demoted=10}
    post_frequency{user_id=0,pkg=io.github.muntashirakon.Music,day=3,count=14,muted=14/14,demoted=14}
    post_frequency{user_id=0,pkg=me.zhanghai.android.files,day=3,count=8,muted=8/8,demoted=0}
    post_frequency{user_id=0,pkg=org.videolan.vlc,day=3,count=246,muted=246/246,demoted=246}
    post_frequency{user_id=0,pkg=android,day=4,count=1691,muted=1691/1691,demoted=1691}
    post_frequency{user_id=0,pkg=com.rom1v.sndcpy,day=4,count=10,muted=10/10,demoted=10}
    post_frequency{user_id=0,pkg=io.github.muntashirakon.Music,day=4,count=10,muted=10/10,demoted=10}
    post_frequency{user_id=0,pkg=me.zhanghai.android.files,day=4,count=8,muted=8/8,demoted=0}
    post_frequency{user_id=0,pkg=org.videolan.vlc,day=4,count=20,muted=20/20,demoted=20}
    post_frequency{user_id=0,pkg=android,day=5,count=1,muted=1/1,demoted=1}
    post_frequency{user_id=0,pkg=com.rom1v.sndcpy,day=5,count=2,muted=2/2,demoted=2}
    post_frequency{user_id=0,pkg=com.ss.android.ugc.aweme,day=5,count=5,muted=0/0,demoted=5}
    post_frequency{user_id=0,pkg=io.github.muntashirakon.Music,day=5,count=64,muted=64/64,demoted=64}
    post_frequency{user_id=0,pkg=org.videolan.vlc,day=5,count=78,muted=78/78,demoted=78}
    post_frequency{user_id=0,pkg=android,day=6,count=136,muted=136/136,demoted=136}
    post_frequency{user_id=0,pkg=com.rom1v.sndcpy,day=6,count=3,muted=3/3,demoted=3}
    post_frequency{user_id=0,pkg=com.ss.android.ugc.aweme,day=6,count=16,muted=0/0,demoted=16}
    post_frequency{user_id=0,pkg=io.github.muntashirakon.Music,day=6,count=103,muted=103/103,demoted=103}
    post_frequency{user_id=0,pkg=org.videolan.vlc,day=6,count=63,muted=63/63,demoted=63}
    post_frequency{user_id=0,pkg=android,day=7,count=2243,muted=2243/2243,demoted=2243}
    post_frequency{user_id=0,pkg=com.rom1v.sndcpy,day=7,count=2,muted=2/2,demoted=2}
    post_frequency{user_id=0,pkg=io.github.muntashirakon.Music,day=7,count=14,muted=14/14,demoted=14}
    post_frequency{user_id=0,pkg=org.videolan.vlc,day=7,count=22,muted=22/22,demoted=22}
```

```
fira@Fira ~ % adb shell pm uninstall --user 0 com.android.server.telecom
Success
```

# 0

could i remove unwanted nofication automatically on android. like missed calls. system setting does not offer the option.

---

Yes — **you _can_ automatically remove unwanted notifications on Android** (including things like spammy alerts), but **the Android system doesn’t offer a built-in option to automatically clear notifications like missed calls**. You have to use third-party tools or automation to achieve it. ([Gadgets To Use][1])

Here are the practical ways you can do it:

---

## ✅ 1. Use a Third-Party Auto-Clear Notifications App

Apps exist that **automatically dismiss notifications** based on rules you define:

### 📱 Auto Clear Notifications (simple auto-delete app)

- Lets you automatically clear notifications from selected apps.
- You can filter by app name, icon or keywords.
- Also lets you **backup cleared notifications** for later review. ([MyAndroid][2])

**Steps (general)**

1. Install the app from Google Play or an APK source.
2. Grant _notification access_ permission.
3. Enable _auto cancel notifications_.
4. Select apps or add keywords whose notifications you want removed automatically.

💡 Great for things like persistent alerts you don’t care about (ads, banners, etc.).

---

## ✅ 2. Use a Notification Manager With Rules

There are more advanced notification manager apps that let you make **rules**:

### 📌 FilterBox Notification Manager

- Can automatically block or remove notifications.
- Offers filtering and AI-driven spam detection.
- You define which notifications to allow or clear. ([Gadgets To Use][1])

These tend to be more flexible than simple clear-all tools.

---

## ⚙️ 3. Automate With Tasker/Automation Apps

If you’re comfortable with automation tools:

### 📍 Tasker (or similar like MacroDroid)

You can create profiles that trigger when a notification appears and automatically clear it.

Example logic:

- **If notification from “Phone” with “missed call” text → cancel it after X seconds.**

This is more advanced but super powerful for custom rules.

---

## 🔄 4. IFTTT / Automation to Silence After Missed Calls

IFTTT can _react_ to events like missed calls:

- Example: After a missed call occurs, trigger _Do Not Disturb_ so you don’t keep getting alerts.
  (This won’t delete the notification, but it stops further interruptions.) ([IFTTT][3])

---

## ⚠️ Important Notes

### 📌 System apps & persistent notifications

- Android often prevents disabling **Phone app notifications** (especially _missed call_ categories) via settings alone — many phones gray them out. ([Reddit][4])
- Some persistent system notifications can only be dismissed by interacting with the phone app or using automation.

### 📌 Root access gives more control

If your device is **rooted**, there are deeper system-level tools that can clear even persistent notifications automatically — but rooting has security implications and isn’t recommended for most users.

---

## 🧠 Bonus: Android AI Notification Organizer (Pixel only)

On newer Pixel phones (Android update) there’s an AI organizer that **silences or summarizes low-priority notifications** — though it doesn’t remove them automatically outright. ([androidcentral.com][5])

---

If you tell me your **Android version and phone model**, I can suggest the **best app/settings for your specific device**!

[1]: https://gadgetstouse.com/blog/2023/09/14/auto-clear-android-phone-notifications/?utm_source=chatgpt.com "3 Ways to Automatically Clear Notifications on Android - Gadgets To Use"
[2]: https://www.myandroid.org/apps/com-khalid-smartnoti?utm_source=chatgpt.com "Auto Clear Notifications"
[3]: https://ifttt.com/applets/jZbr76MV-quiet-after-missed-call-notifications?utm_source=chatgpt.com "Quiet after missed call notifications - IFTTT"
[4]: https://www.reddit.com/r/androidapps/comments/k0x0bs?utm_source=chatgpt.com "unable to disable notifications for Android phone app? (Missed calls, voicemails)"
[5]: https://www.androidcentral.com/phones/google-pixel/how-to-set-up-and-use-android-ai-notification-organizer?utm_source=chatgpt.com "How to set up and use Android AI notification organizer"

# 1

give me an libre app

---

Yes — there **are libre (open-source) Android apps** that can help you _automatically dismiss or filter unwanted notifications_ (including ones you don’t want to see). Here are some good options you can install easily, usually from **F-Droid** (an open-source app store):

---

### 📱 **NotiFilter** (Free & Open Source)

✔️ Listens to all notifications and _automatically dismisses or taps_ ones that match your filters.
✔️ Uses **regex filters** so you can target specific text (like “Missed call”) or apps.
✔️ You can choose whether to dismiss it completely or interact with a button in the notification.
✔️ Includes history and scheduling.
🔓 Licensed under **GPL-3.0 (fully libre)**. ([F-Droid][1])

👉 Best choice if you want:

- No ads
- No proprietary components
- Automatic removal based on rules

**Install from F-Droid:** search for `NotiFilter` (package: `co.adityarajput.notifilter`). ([F-Droid][1])

---

### 📱 **AutoNotify** (FLOSS component, MIT License)

✔️ Monitors notifications and can blacklist certain notifications.
✔️ Still open-source and available on F-Droid. ([F-Droid][2])

⚠️ Note: some builds may depend on other non-free apps — check the F-Droid page carefully before installing. ([F-Droid][2])

**Install from F-Droid:** search for `AutoNotify`. ([F-Droid][2])

---

### 🧠 About _notification_remover_ (GPL-3.0 open source)

There’s a **GitHub project called notification_remover** designed to remove ongoing notifications. It’s GPL-3.0 licensed, so wholly libre — but it may not yet be published on mainstream app stores. ([GitHub][3])

GitHub: `github.com/tjysdsg/notification_remover` (you’d have to compile/install manually). ([GitHub][3])

---

## 🛠 Tips for Using These Apps

### 📌 Grant Notification Access

After installing from F-Droid, go to **Settings → Apps → Special app access → Notification access** and enable it for the tool you installed.

This is required for them to monitor and dismiss notifications.

### 📌 Filtering Missed Calls

- You might need a filter for “Missed call” text if the notification has that exact phrase.
- For system notifications that are truly persistent (like phone app ongoing notifications), some apps “snooze” them rather than fully delete — but this still removes them from your drawer. ([F-Droid][1])

### 📌 Android Limitations

Android limits background access, so extremely persistent system notifications may still require deeper rules or automation (e.g., via Tasker). But for most unwanted notifications **NotiFilter** works well. ([F-Droid][1])

---

## 📍 Where to Get These Apps

- 📦 **F-Droid** — the recommended source for libre Android apps: [https://f-droid.org](https://f-droid.org)
- Search **NotiFilter** or **AutoNotify** in F-Droid and install directly. ([F-Droid][1])

---

If you want a step-by-step setup to _automatically remove missed call notifications specifically_ using one of these apps, tell me your Android version and I’ll walk you through it!

[1]: https://f-droid.org/packages/co.adityarajput.notifilter/?utm_source=chatgpt.com "NotiFilter | F-Droid - Free and Open Source Android App Repository"
[2]: https://f-droid.org/packages/com.upbad.apps.autonotify/?utm_source=chatgpt.com "AutoNotify | F-Droid - Free and Open Source Android App Repository"
[3]: https://github.com/tjysdsg/notification_remover?utm_source=chatgpt.com "GitHub - tjysdsg/notification_remover: NO-tifications: remove any notifications on Android"

# 2

see current notifications using adb

---

Yes — you can **see current notifications on your Android device using ADB**, which is very useful for debugging or for automation scripts.

### 🔍 See Currently Displayed Notifications

Connect your device with **USB debugging enabled** and run:

```sh
adb shell dumpsys notification
```

This will print **all currently posted notifications** (package, text, IDs, timestamps, etc.). ([Stack Overflow][1])

### 🧠 (Optional) See Full Text Without Redaction

Some Android versions redact sensitive parts of notifications by default. To see more detail, you can use:

```sh
adb shell dumpsys notification --noredact
```

This attempts to show the full notification text and actions where permitted. ([Exchangetuts][2])

---

## ⚙️ How to Run This (Step-by-Step)

1. **Enable USB Debugging**

   - Settings → About phone → tap “Build number” 7× → Developer options → USB debugging (on).

2. **Connect device to your computer with USB**
3. **Open a terminal/command prompt**
4. Confirm device is connected:

```sh
adb devices
```

You should see your device listed.

5. Run the dumpsys command:

```sh
adb shell dumpsys notification
```

(Optional: add `--noredact` as above.)

---

## 📌 What You’ll Get

The output shows:

- **Notification entries**
- **Package names**
- **Notification keys & flags**
- **Texts, titles, ticker, group info** (depending on system/redaction) ([Stack Overflow][1])

You can parse this output to identify which notification you want to act on in automation.

---

## 🧩 Example Use Cases

- **Automation/Tasker scripts**: trigger actions based on notification content.
- **Debugging**: see what exactly is being posted in the system.
- **Filtering/snoozing**: identify the key for commands like `cmd notification snooze` (on supported builds; see below). ([Reddit][3])

---

## ⚠️ Notes

- This shows _current active notifications only_ — not past ones (those are in Notification History). ([Android Enthusiasts Stack Exchange][4])
- System flags/permissions may vary by device and Android version. Some text may stay redacted unless you’re on debug builds or using root. ([Stack Overflow][1])

---

If you also want to **clear or manipulate specific notifications via ADB**, I can provide those commands too!

[1]: https://stackoverflow.com/questions/38336496/is-there-an-adb-shell-command-to-list-the-items-on-the-androids-notification-ba?utm_source=chatgpt.com "Is there an adb/shell command to list the items on the android's notification bar? - Stack Overflow"
[2]: https://www.exchangetuts.com/is-there-an-adbshell-command-to-list-the-items-on-the-androids-notification-bar-1640461623402948?utm_source=chatgpt.com "Is There an adb/shell command to list the items on the android's notification bar?"
[3]: https://www.reddit.com/r/androidroot/comments/1fm9cq7?utm_source=chatgpt.com "[Guide] Remove persistent notifications (e.g. Do Not Disturb)"
[4]: https://android.stackexchange.com/questions/123937/where-does-lollipop-stores-notification-log?utm_source=chatgpt.com "Where does Lollipop stores notification log? - Android Enthusiasts Stack Exchange"

# 3

make it human friendly

---

Here’s a **human-friendly way to _see current Android notifications via ADB_** — without scrolling through a massive wall of text.

Android doesn’t have a simple built-in command-like “list notifications nicely,” but you _can_ get the info and **parse it into something readable**.

---

## ✅ 1) Basic ADB Command (Raw Output)

This command shows all active notifications:

```sh
adb shell dumpsys notification
```

That prints a large technical dump of everything the system is holding in the notification service. It’s useful, but not user-friendly. ([Stack Overflow][1])

To see more complete text (titles/text content), use:

```sh
adb shell dumpsys notification --noredact
```

The `--noredact` flag tries to _unhide_ full text fields. ([Stack Overflow][1])

---

## ✅ 2) Extract Just the Notification Summaries

You can filter that output so it’s easier to read.

### Print just the app package + brief description

On a **Linux/macOS/WSL shell**:

```sh
adb shell dumpsys notification | grep -E "pkg=|tickerText="
```

This gives you lines like:

```
pkg=com.whatsapp
tickerText=New message from John
```

That’s much more readable than the raw dump. ([Stack Overflow][1])

### Better structured listing with awk (human-friendly)

```sh
adb shell dumpsys notification | awk -F '|' '/NotificationRecord/ {print $2}'
```

This prints a simpler list of app names or keys for active notifications. ([Stack Overflow][1])

---

## ✅ 3) Advanced: Get JSON (Machine-Friendly)

Some newer Android builds support JSON output for notifications:

```sh
adb shell dumpsys notification --json
```

Not all devices support this flag, but if they do you’ll get structured JSON you can parse with a script (Python, jq, etc.) so you can _really cleanly format_ titles, text, package names, IDs, etc. ([CodePal][2])

Example idea (pretty-print with `jq`):

```sh
adb shell dumpsys notification --json | jq
```

---

## 📌 What Each Approach Is Good For

| Command                | Good For                                                   |                |
| ---------------------- | ---------------------------------------------------------- | -------------- |
| `dumpsys notification` | Full raw info (most detail) ([Stack Overflow][1])          |                |
| `--noredact`           | Shows full title/text (if supported) ([Stack Overflow][1]) |                |
| `grep`/`awk` filters   | Quick human-friendly summary ([Stack Overflow][1])         |                |
| `--json` with tools    | Structured, easy to script                                 | ([CodePal][2]) |

---

## 🧠 Example: Quick Summary Command

This command gives you _app package + notification title/text only_:

```sh
adb shell dumpsys notification --noredact | grep -E "pkg=|android.title=|android.text="
```

You’ll get blocks like:

```
pkg=com.whatsapp
android.title=New Message
android.text=Hey how are you?
```

Much easier to read than the standard dump.

---

## 🛠 Tips

- Always enable **USB debugging** on the phone first.
- If you don’t see text, it might be redacted — try `--noredact`. ([Stack Overflow][1])
- You can pipe results into **scripts** to automate extraction.
- If your device doesn’t support JSON output, fallback to `grep`/`awk` filters above.

---

If you want, tell me your **OS (Windows/Mac/Linux)** and I can give you a **ready-to-run script** that prints notifications cleanly!

[1]: https://stackoverflow.com/questions/38336496/is-there-an-adb-shell-command-to-list-the-items-on-the-androids-notification-ba?utm_source=chatgpt.com "Is there an adb/shell command to list the items on the android's notification bar? - Stack Overflow"
[2]: https://codepal.ai/code-generator/query/kM02OPND/python-code-android-notification-capture?utm_source=chatgpt.com "Python Code for Android Notification Capture - CodePal"
