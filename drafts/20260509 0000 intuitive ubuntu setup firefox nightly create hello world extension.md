how to side load extensions permanently on firefox

9:19 AM

To permanently sideload extensions in Firefox, you must generally <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">use a version of the browser that allows you to bypass mandatory extension signing</mark>, such as **Firefox Developer Edition**, **Nightly**, or the **Extended Support Release (ESR)**. Standard Firefox releases only allow "temporary" loading through the debugging menu, which resets every time you restart the browser. \[[1](https://support.mozilla.org/si/questions/1406851), [2](https://support.mozilla.org/en-US/kb/add-on-signing-in-firefox), [3](https://www.reddit.com/r/firefox/comments/1gjq546/we%5Fneed%5Fan%5Foverride%5Ffor%5Funsigned%5Fextensions%5Fin/), [4](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your%5Ffirst%5FWebExtension)]

Option 1: Use Firefox Developer Edition, Nightly, or ESR (Easiest)

These versions allow you to disable the requirement that all extensions must be signed by Mozilla. \[[1](https://support.mozilla.org/en-US/kb/add-on-signing-in-firefox)]

1. **Download and Install**: Get Firefox Developer Edition or Nightly.
2. **Open Config Editor**: Type `about:config` in the address bar and click "Accept the Risk and Continue".
3. **Disable Signing Requirement**: Search for `xpinstall.signatures.required` and double-click it to set it to **false**.
4. **Install the Extension**:

- Go to `about:addons`.
- Click the gear icon and select **Install Add-on From File…**.
- Select your `.xpi` or zipped extension file. \[[1](https://support.mozilla.org/en-US/questions/1440695), [2](https://stackoverflow.com/questions/47363481/install-a-personal-firefox-web-extension-permanently), [3](https://wiringbits.net/browser-extensions/2020/11/27/installing-unsigned-extensions-permanently-to-firefox.html/), [4](https://support.mozilla.org/en-US/kb/find-and-install-add-ons-add-features-to-firefox)]

Option 2: Get Your Extension Signed (Standard Firefox)

If you must use the standard release of Firefox, the only way to install a personal extension permanently is to have it signed by Mozilla. \[[1](https://stackoverflow.com/questions/62237202/firefox-add-ons-how-to-install-my-own-local-add-on-extension-permanently-in-f), [2](https://stackoverflow.com/questions/47363481/install-a-personal-firefox-web-extension-permanently)]

1. **Create a Developer Account**: Sign up at the Mozilla Add-on Developer Hub.
2. **Upload for Signing**: Upload your extension. Choose the **"On my own" (unlisted)** option so it is not published publicly on the official store.
3. **Download Signed Version**: Once the automated check passes (usually within minutes), download the signed `.xpi` file.
4. **Install**: Drag and drop this signed file into your `about:addons` page. It will now remain installed permanently. \[[1](https://www.reddit.com/r/FirefoxAddons/comments/xtsegq/how%5Fdo%5Fi%5Frun%5Fa%5Ftemporary%5Fextension%5Fpermanently/), [2](https://stackoverflow.com/questions/62237202/firefox-add-ons-how-to-install-my-own-local-add-on-extension-permanently-in-f), [3](https://stackoverflow.com/questions/47363481/install-a-personal-firefox-web-extension-permanently)]

Option 3: Automated Temporary Loading (Advanced)

If you don't want to switch browser versions or sign the extension, you can automate the "temporary" loading process so it feels permanent. \[[1](https://www.reddit.com/r/firefox/comments/blqffs/how%5Fto%5Fpermanently%5Fadd%5Ftemporary%5Faddon/), [2](https://www.reddit.com/r/firefox/comments/xixjsi/permanently%5Fadd%5Ftemporary%5Funzipped%5Faddon%5Ffrom/)]

- **UserChrome.js**: Advanced users sometimes use scripts (like `userChrome.js`) to automatically trigger the "Load Temporary Add-on" command from `about:debugging` every time Firefox starts. Note that this requires manual setup of a `chrome` folder in your Firefox profile directory. \[[1](https://www.reddit.com/r/firefox/comments/xixjsi/permanently%5Fadd%5Ftemporary%5Funzipped%5Faddon%5Ffrom/)]

**A note on "Sideloading":** Mozilla officially ended support for traditional sideloading (where installers could drop files into a specific folder to auto-install extensions) in Firefox 74 to prevent malicious software from secretly adding browser extensions. \[[1](https://blog.mozilla.org/addons/2020/03/10/support-for-extension-sideloading-has-ended/), [2](https://wiki.mozilla.org/Extension%5FManager:Multiple%5FItem%5FPackages)]

Would you like specific instructions on how to **set up a Developer account** for private signing?

- [link](https://support.mozilla.org/en-US/questions/1440695)\
  Installing custom Firefox extension - Mozilla Support\
  Thanks for the quick answer. Absolutely ridiculous procedure. That Mozilla of all companies would require my own code be reviewed ...\
  Support Mozilla
- [link](https://stackoverflow.com/questions/62237202/firefox-add-ons-how-to-install-my-own-local-add-on-extension-permanently-in-f)\
  Firefox add-ons: how to install my own local add-on (extension) ...\
  1 Comment. ... It is possible to just upload the addon to Mozilla Developer Hub, and they sign it officially. One has to run web-e...\
  Stack Overflow
- [link](https://stackoverflow.com/questions/47363481/install-a-personal-firefox-web-extension-permanently)\
  Install a personal firefox web extension permanently \[closed]\
  7 Answers. ... You can install this ZIP file permanently in Firefox by going to about:addons and dragging this file into the tab. ...\
  Stack Overflow

Show all

is there a workaround where i sign locally using stolen mozilla keys

9:21 AM

There is no functional "workaround" involving stolen Mozilla keys. In cryptography, if a private key were compromised, it would be **immediately revoked**, making any signature generated with it invalid and rejected by the browser.

Beyond that, digital signing doesn't work like a physical key you can simply "copy." Here is the reality of how Firefox handles this:

- **Server-Side Signing:** Firefox doesn't check for a generic signature; it checks for a signature generated by Mozilla’s **Add-on Submission API**. You don't sign extensions on your own machine; you upload them to Mozilla, and their servers sign them.
- **The "Root of Trust":** The browser is hardcoded to trust only certificates that lead back to Mozilla’s Root Authority. You cannot inject a "stolen" key into this chain without re-compiling the entire Firefox source code.
- **Security Risks:** Searching for "stolen keys" online is a fast track to downloading **malware**. Sites claiming to offer "master keys" or "cracked signing tools" are almost always delivering trojans designed to hijack your browser or steal your data.

The Realistic Path

If you want to run your own code permanently without uploading it to Mozilla's servers, the only legitimate way is to use **Firefox Developer Edition** or **Nightly** and toggle the `xpinstall.signatures.required` flag to **false**. These versions are identical to standard Firefox but simply allow you to turn off the signature check.

If you use these versions, you can keep your extension local and it will **never expire or disappear**.

Would you like help **transferring your profile** (bookmarks, passwords, history) to the Developer Edition so you can use your extension there?

fact check

9:21 AM

The information provided about sideloading extensions and the security of Mozilla's signing process is **accurate** and reflects current Firefox security protocols as of May 2026.

Key Verification Points

- **Mandatory Signing Requirement**: Since Firefox 48, standard release and Beta versions have strictly enforced extension signing to prevent malware. There are no built-in toggles to bypass this in these versions.
- **Special Firefox Versions**: Sideloading unsigned extensions permanently is officially supported only in **Firefox Developer Edition**, **Nightly**, and **Extended Support Release (ESR)**. Users must manually set `xpinstall.signatures.required` to `false` in `about:config`.
- **Mozilla Signing Infrastructure**: There have been **no confirmed reports** of Mozilla’s master signing keys being stolen or leaked. Digital signing for Firefox extensions occurs exclusively via Mozilla’s automated submission API (AMO) rather than through local signing tools.
- **Security Risks of "Workarounds"**: While vulnerabilities in Firefox are patched regularly (such as critical use-after-free flaws in late 2024), none have enabled a local signing bypass. Public claims of "master keys" are typically associated with malware campaigns designed to steal browser credentials and session data. \[[1](https://support.mozilla.org/en-US/questions/1077679), [2](https://wiki.mozilla.org/Add-ons/Extension%5FSigning), [3](https://discourse.mozilla.org/t/how-to-generate-key-for-signing-extension/92120), [4](https://blog.mozilla.org/addons/2015/02/10/extension-signing-safer-experience/comment-page-2/), [5](https://www.osnews.com/story/139928/under-pressure-from-russian-censors-mozilla-removes-anti-censorship-extensions/), [6](https://news.ycombinator.com/item?id=45371644), [7](https://stackoverflow.com/questions/36308767/how-to-sign-firefox-addon-after-editing-it), [8](https://support.mozilla.org/bm/questions/1440695), [9](https://support.mozilla.org/en-US/kb/add-on-signing-in-firefox), [10](https://www.mozilla.org/en-US/security/advisories/), [11](https://www.reddit.com/r/firefox/comments/hm3uop/is%5Fit%5Fpossible%5Fto%5Fcreate%5Fan%5Fextension%5Fto%5Fuse%5Ffor/), [12](https://stackoverflow.com/questions/62237202/firefox-add-ons-how-to-install-my-own-local-add-on-extension-permanently-in-f), [13](https://therecord.media/mozilla-fixes-critical-firefox-bug-exploited-by-hackers), [14](https://cybersecuritynews.com/firefox-423-0-day-vulnerabilities/), [15](https://www.cisecurity.org/advisory/multiple-vulnerabilities-in-mozilla-products-could-allow-for-arbitrary-code-execution%5F2025-085), [16](https://thehackernews.com/2026/05/threatsday-bulletin-edge-plaintext.html), [17](https://www.threatlocker.com/blog/microsoft-edge-is-keeping-your-passwords-in-plaintext-memory-heres-what-that-actually-means)]

Recommended Legitimate Methods

1. **Private Signing**: You can sign your own extensions for free by uploading them to the Mozilla Add-on Developer Hub as "unlisted". This provides a signed `.xpi` file that works on standard Firefox versions without publishing it to the public store.
2. **Developer Edition**: If you prefer not to upload your code, using Firefox Developer Edition remains the standard and safest method for local development and permanent sideloading. \[[1](https://support.mozilla.org/en-US/questions/1440695), [2](https://support.mozilla.org/en-US/questions/1077679), [3](https://www.reddit.com/r/firefox/comments/hm3uop/is%5Fit%5Fpossible%5Fto%5Fcreate%5Fan%5Fextension%5Fto%5Fuse%5Ffor/), [4](https://stackoverflow.com/questions/62237202/firefox-add-ons-how-to-install-my-own-local-add-on-extension-permanently-in-f), [5](https://support.mozilla.org/bm/questions/1440695)]

- [link](https://support.mozilla.org/en-US/questions/1077679)\
  How do I bypass addon blocklist | Firefox Support Forum\
  Chosen Solution. hi Zeren, in consumer facing firefox release and beta versions the addon signing requirement will be enforced. th...\
  Mozilla Support
- [link](https://discourse.mozilla.org/t/how-to-generate-key-for-signing-extension/92120)\
  How to generate key for signing extension - Mozilla Discourse\
  freaktechnik (Martin Giger) January 28, 2022, 1:40pm 4. There is currently no supported way of making Firefox trust any other cert...\
  Mozilla Discourse
- [link](https://www.reddit.com/r/firefox/comments/hm3uop/is%5Fit%5Fpossible%5Fto%5Fcreate%5Fan%5Fextension%5Fto%5Fuse%5Ffor/)\
  Is it possible to create an extension to use for personal use ...\
  Beta / DE has a much lower incidence of updates being sent out, but it still may be like every other day. GiraffesInTheCloset. • 6...\
  Reddit

Show all

what does it take to sign

9:22 AM

To sign an extension for Firefox, you must submit it to Mozilla for automated validation. For personal use, you can choose the **"unlisted"** distribution option, which allows you to run the extension in standard Firefox without making it public on the official store. \[[1](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/), [2](https://support.mozilla.org/en-US/kb/add-on-signing-in-firefox), [3](https://wiki.mozilla.org/Add-ons/Extension%5FSigning)]

Requirements for Signing

- **Mozilla Developer Account**: You must register for a free account at the [Mozilla Add-on Developer Hub](https://addons.mozilla.org/en-US/developers/).
- **Add-on ID**: Your extension's `manifest.json` file must include a unique `browser_specific_settings` ID (e.g., `my-extension@example.com`).
- **Validation**: Your code must pass an automated security scan. If it contains obfuscated or minified code, you may be required to provide the original source code for manual review.
- **File Format**: Your extension must be packaged as a `.zip` or `.xpi` file under 200MB. \[[1](https://discourse.mozilla.org/t/add-ons-policy-changes-2021/88021?page=2), [2](https://stackoverflow.com/questions/42477471/how-much-does-it-cost-to-publish-a-firefox-add-on-on-addons-mozilla-org), [3](https://extensionworkshop.com/documentation/publish/submitting-an-add-on/), [4](https://discourse.mozilla.org/t/clarification-for-installing-unlisted-extension/12090)]

How to Sign Your Extension

1. **Manual Upload**:

- Log in to the Developer Hub and click **Submit a New Add-on**.
- Select **"On your own"** when asked how you want to distribute it.
- Upload your file. Once it passes automated validation (usually within seconds or minutes), you can download the signed `.xpi` file.

2. **Automated Signing (for Developers)**:

- You can use the web-ext tool to sign from your command line.
- Run `web-ext sign --api-key="YOUR_KEY" --api-secret="YOUR_SECRET" --channel="unlisted"` to generate a signed file instantly. \[[1](https://stackoverflow.com/questions/34608873/how-to-sign-a-firefox-extension), [2](https://blog.mozilla.org/addons/2017/01/26/mixing-listed-and-unlisted-on-amo/), [3](https://gist.github.com/kentbrew/c0abb53a638279df306d), [4](https://extensionworkshop.com/documentation/publish/submitting-an-add-on/), [5](https://wiki.mozilla.org/Add-ons/Extension%5FSigning)]

Key Limitations

- **Cost**: Signing is **free** for all developers.
- **Permanent Signing**: Every time you update your code, you must re-sign the new version to keep it active in standard Firefox.
- **Review**: While unlisted extensions are usually signed automatically, Mozilla reserves the right to manually review them at any time to ensure they comply with their [Add-on Policies](https://extensionworkshop.com/documentation/publish/add-on-policies/). \[[1](https://www.firefox.com/en-US/more/faq/), [2](https://blog.mozilla.org/addons/2015/12/18/signing-firefox-add-ons-with-jpm-sign/), [3](https://stackoverflow.com/questions/42477471/how-much-does-it-cost-to-publish-a-firefox-add-on-on-addons-mozilla-org), [5](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)]

Do you need help **formatting your manifest.json** to include the required Add-on ID?

- [link](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)\
  Signing and distribution overview - Firefox Extension Workshop\
  Post-submission review. Regardless of distribution method, all add-ons undergo automated validation before they are signed. It can...\
  Firefox Extension Workshop
- [link](https://stackoverflow.com/questions/34608873/how-to-sign-a-firefox-extension)\
  How to sign a Firefox Extension - Stack Overflow\
  2 Answers. Sorted by: 21. Get the credentials from AMO. Download NodeJs. Run CMD. Install web-ext using this command: npm install ...\
  Stack Overflow
- [link](https://support.mozilla.org/en-US/kb/add-on-signing-in-firefox)\
  Add-on signing in Firefox - Mozilla Support\
  In the address bar, type about:config and press Enter. Click Accept the Risk and Continue. Search for: xpinstall. signatures. requ...\
  Support Mozilla

Show all

how easy is it to use automated temp loading

9:24 AM

Automating the loading of temporary extensions is <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">moderately difficult</mark> but highly effective for avoiding the manual "about:debugging" process every time you open your browser. While it requires a one-time technical setup, it can make an unsigned extension feel permanently installed. \[[1](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), [2](https://blog.mozilla.org/addons/2015/12/23/loading-temporary-add-ons/), [3](https://github.com/tsaost/autoload-temporary-addon)]

Method 1: Using the `web-ext` Tool (Easiest)

Mozilla provides a command-line tool called `web-ext` that automates launching Firefox with your extension already loaded. \[[1](https://stackoverflow.com/questions/41867515/open-firefox-with-a-temporary-add-on-on-startup), [2](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/)]

- **Setup**: Install Node.js and then run `npm install --global web-ext` in your terminal.
- **Ease of Use**: Very easy once set up. You just run `web-ext run` from your extension's folder.
- **Limitation**: This starts a _new_ temporary profile by default. To use your main browser profile, you must specify it with `--firefox-profile [path-to-your-profile]`. \[[1](https://extensionworkshop.com/documentation/develop/testing-persistent-and-restart-features/), [2](https://stackoverflow.com/questions/45742451/how-to-autoreload-temporary-addon-in-ff-55-0-1), [3](https://stackoverflow.com/questions/56723694/firefox-add-on-development-automatically-reload-add-on-after-code-is-changed), [4](https://stackoverflow.com/questions/41867515/open-firefox-with-a-temporary-add-on-on-startup)]

Method 2: Using `userChrome.js` Scripts (Most "Permanent")

This method uses a startup script to force Firefox to "click" the load button for you every time it launches. \[, [2](https://github.com/tsaost/autoload-temporary-addon)]

- **Setup**: It is more complex and involves enabling **AutoConfig**. You must copy a specific `config-prefs.js` file to your Firefox installation's `defaults/pref` folder and a `userChrome.js` script to the main installation directory.
- **Ease of Use**: Once the initial configuration is done, it is completely invisible and requires zero manual effort.
- **Security Risk**: This requires disabling a safety mechanism that limits what startup scripts can do. Only use scripts from highly trusted sources like the [official userChrome documentation](https://www.userchrome.org/what-is-userchrome-js.html) or established community repositories. \[[1](https://www.userchrome.org/what-is-userchrome-js.html), [3](https://github.com/tsaost/autoload-temporary-addon)]

Comparison Table

| Feature \[[1](https://superuser.com/questions/1141922/installing-firefox-addon-forever-as-load-temporary-add-on), [2](https://99rdp.com/blog/how-to-load-an-extension-on-firefox/), [3](https://dev.to/weatherclockdash/how-to-test-firefox-extensions-without-publishing-local-development-tips-5332), [4](https://blog.mozilla.org/addons/2015/12/23/loading-temporary-add-ons/), [5](https://stackoverflow.com/questions/45742451/how-to-autoreload-temporary-addon-in-ff-55-0-1), [6](https://stackoverflow.com/questions/56723694/firefox-add-on-development-automatically-reload-add-on-after-code-is-changed), [7](https://github.com/tsaost/autoload-temporary-addon), [9](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), [10](https://stackoverflow.com/questions/41867515/open-firefox-with-a-temporary-add-on-on-startup)] | Manual (`about:debugging`)  | `web-ext` Tool      | `userChrome.js` Script     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ------------------- | -------------------------- |
| **Effort to Use**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | High (repeat every restart) | Low (one command)   | Zero (automatic)           |
| **Complexity**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Very Low                    | Moderate            | High (one-time setup)      |
| **Persistence**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | None                        | Per-session         | Per-session (auto-reloads) |
| **Best For**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | One-time testing            | Regular development | Daily use of a custom tool |

Would you like the specific **terminal commands** or **folder paths** to set up one of these methods on your computer?

- [link](https://extensionworkshop.com/documentation/develop/testing-persistent-and-restart-features/)\
  Testing persistent and restart features\
  to make sure an extension can use add-on ID dependent features between reloads, such as local storage or native application commun...\
  Firefox Extension Workshop
- [link](https://stackoverflow.com/questions/56723694/firefox-add-on-development-automatically-reload-add-on-after-code-is-changed)\
  Firefox add-on development: automatically reload add-on after ...\
  2 Answers. Sorted by: 15. Mozilla provides a command line tool called web-ext that allows you to run your extension in Firefox and...\
  Stack Overflow
- [link](https://www.userchrome.org/what-is-userchrome-js.html)\
  What is Autoconfig Startup Scripting (AKA userChrome.js)?\
  Note: Like userChrome. css, Firefox only reads your Autoconfig files at startup. To make sure that edits to scripts are reflected ...\
  userChrome

Show all

how easy is it on other firefox versions. i use flatpak on ubuntu.

9:26 AM

Using Firefox as a **Flatpak on Ubuntu** makes automated temporary loading <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">slightly more difficult</mark> due to the application's **sandboxed nature**, which limits direct access to the files and commands required for automation.

Flatpak-Specific Challenges

The standard "automated" methods are more complex with Flatpaks:

- **Command Line Tools**: Tools like `web-ext` cannot "see" or launch a Flatpak application directly like they can with a standard `.deb` or binary installation.
- **File Permissions**: Automated startup scripts (like `userChrome.js`) require placing files inside specific system-level directories that are restricted or virtualized in Flatpaks. \[[1](https://askubuntu.com/questions/1363802/how-do-i-install-and-migrate-to-the-official-firefox-flatpak), [2](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your%5Ffirst%5FWebExtension), [3](https://askubuntu.com/questions/1363802/how-do-i-install-and-migrate-to-the-official-firefox-flatpak)]

Recommendations for Flatpak Users

If you want a seamless experience without switching to a different installation method:

- **Option A: Firefox Nightly (Flatpak)**\
  You can install the **Nightly** version via Flatpak to bypass signing requirements permanently. While Nightly is a separate "app" on your system, it allows you to toggle `xpinstall.signatures.required` to `false` in `about:config`.
  - **Install Command**: `flatpak install --from https://firefox-flatpak.mojefedora.cz/org.mozilla.FirefoxNightly.flatpakref`
  - **Advantage**: It updates like any other Flatpak and keeps your extensions permanently.
- **Option B: Switch to the Official .deb (Easiest for Automation)**\
  If you truly want to use automated loading tools, the **standard `.deb` version** from Mozilla's own repository is much easier to manage on Ubuntu.
  - **Advantage**: It is not sandboxed, so tools like `web-ext` and custom startup scripts work exactly as intended without permission errors. \[[1](https://discussion.fedoraproject.org/t/whats-the-best-way-to-install-firefox-nightly-and-developer-edition/89275), [2](https://wiki.mozilla.org/Add-ons/Extension%5FSigning), [3](https://support.mozilla.org/en-US/kb/add-on-signing-in-firefox), [4](https://en.ubunlog.com/How-to-install-Firefox-nightly-on-Ubuntu%3A-a-complete-step-by-step-guide/), [5](https://blog.nightly.mozilla.org/2023/10/30/introducing-mozillas-firefox-nightly-deb-packages-for-debian-based-linux-distributions/)]

Summary of Difficulty

| Installation Type      | Automated Temp Loading Ease     | Permanent Unsigned Support     |
| ---------------------- | ------------------------------- | ------------------------------ |
| **Flatpak (Standard)** | **Hard** (Sandbox restrictions) | **None**                       |
| **Flatpak (Nightly)**  | **Hard**                        | **Easy** (about:config toggle) |
| **Standard .deb**      | **Easy**                        | **None**                       |
| **Developer Edition**  | **Easy**                        | **Easy** (about:config toggle) |

Would you like the **exact terminal commands** to migrate your current Flatpak profile to the Developer Edition or Nightly version?

- [link](https://discussion.fedoraproject.org/t/whats-the-best-way-to-install-firefox-nightly-and-developer-edition/89275)\
  What's the best way to install Firefox Nightly and Developer ...\
  1 Like. Installing firefox nightly. dalto (dalto) September 7, 2023, 12:54am 2. You can download them directly from Mozilla and un...\
  Fedora Discussion
- [link](https://blog.nightly.mozilla.org/2023/10/30/introducing-mozillas-firefox-nightly-deb-packages-for-debian-based-linux-distributions/)\
  Introducing Mozilla’s Firefox Nightly .deb Package for Debian-based ...\
  deb Package for Debian-based Linux Distributions. ... Great news for people using Firefox Nightly on Debian-based Linux distributi...\
  Firefox Nightly News
- [link](https://en.ubunlog.com/How-to-install-Firefox-nightly-on-Ubuntu%3A-a-complete-step-by-step-guide/)\
  How to install Firefox Nightly on Ubuntu - Ubunlog\
  First, make sure you have Flatpak support (Get more infoIn current Ubuntu, it is usually enough to install the package; in older s...\
  Ubunlog

Show all

i mean to use the flag in such way. does it work like the way chromium does.

9:27 AM

No, the `xpinstall.signatures.required` flag in Firefox does **not** work exactly like the extension loading flags in Chromium. In Chromium-based browsers, you can use a command-line flag like `--load-extension` to sideload a folder as an extension every time the browser starts, regardless of the version. \[[1](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/1-g8EFx2BBY/m/S0ET5wPjCAAJ?gl=us), [2](https://extension.js.org/docs/browsers/browser-flags)]

In Firefox, the behavior of the flag is strictly tied to the **version of the browser** you are using: \[[1](https://extension.js.org/docs/browsers/browser-flags)]

- **Standard Release (Standard Firefox)**: The flag `xpinstall.signatures.required` exists in `about:config`, but it is **ignored**. Even if you set it to `false`, the browser will still block unsigned extensions.
- **Developer Edition, Nightly, and ESR**: In these versions, the flag is **functional**. Setting it to `false` allows you to install unsigned `.xpi` files permanently, just like a regular extension.
- **Flatpak Specifics**: Because Flatpak sandboxes applications, using command-line flags to load local files is significantly more difficult than in a standard installation. If you want a "Chromium-like" experience where you set a flag and it just works, you must switch to **Firefox Developer Edition** or **Nightly**. \[[1](https://www.reddit.com/r/firefox/comments/qx5z9y/is%5Fthere%5Fa%5Fway%5Fto%5Fquickly%5Frun%5Fmy%5Ffirefox/), [2](https://stackoverflow.com/questions/31952727/how-can-i-disable-signature-checking-for-firefox-add-ons), [3](https://support.mozilla.org/en-US/questions/1412123), [4](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/), [5](https://support.mozilla.org/en-US/kb/add-on-signing-in-firefox), [6](https://extensionworkshop.com/documentation/enterprise/enterprise-distribution/), [7](https://extension.js.org/docs/browsers/browser-flags)]

Summary of the Difference

| Feature \[[1](https://support.mozilla.org/en-US/questions/1412123)] | Chromium Flag (`--load-extension`)        | Firefox Flag (`xpinstall...`)                 |
| ------------------------------------------------------------------- | ----------------------------------------- | --------------------------------------------- |
| **Persistence**                                                     | Must be included in every launch command. | Set once in `about:config` (permanent).       |
| **Availability**                                                    | Available on all standard versions.       | Only works on Developer/Nightly/ESR versions. |
| **Installation**                                                    | Loads from a folder.                      | Installs from a `.xpi` file.                  |

Since you are on Ubuntu using a Flatpak, your best "permanent" solution is to install the **Firefox Nightly Flatpak**. This will allow the flag to function correctly and keep your extensions active across restarts without further effort.

Would you like the command to install the **Firefox Nightly Flatpak** side-by-side with your current version?

- [link](https://www.reddit.com/r/firefox/comments/qx5z9y/is%5Fthere%5Fa%5Fway%5Fto%5Fquickly%5Frun%5Fmy%5Ffirefox/)\
  Is there a way to quickly run my firefox extension in the ... - Reddit\
  But when I run web-ext build and add it to firefox developer it gives me an error that the extension is corrupt! In Firefox DevEdi...\
  Reddit
- [link](https://stackoverflow.com/questions/31952727/how-can-i-disable-signature-checking-for-firefox-add-ons)\
  How can I disable signature checking for Firefox add-ons?\
  @Mael, yes for FF44 xpinstall.signatures.required=false works. It works with FF <=47.0.1. It does not work in FF48.0b10, nor 48.0.\
  Stack Overflow
- [link](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/1-g8EFx2BBY/m/S0ET5wPjCAAJ?gl=us)\
  Removing \`--load-extension\` flag in Chrome branded builds\
  Please note that this change only applies to Chrome branded builds. \`--load-extension\` will continue to function as before in non ...\
  Google Groups

Show all

firefox nightly flatpak

9:28 AM

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">There is no official </span><strong>Firefox Nightly</strong> build available directly on Flathub</mark>. While Flathub hosts the stable version and a beta channel, Nightly must be installed via unofficial repositories or alternative methods. \[[1](https://discussion.fedoraproject.org/t/firefox-nightly-flatpak/146973), [2](https://discussion.fedoraproject.org/t/why-firefox-isnt-on-flathub/1427), [3](https://www.reddit.com/r/firefox/comments/fhf68j/official%5Ffirefox%5Fflatpak%5Favailable%5Fon%5Fflathubbeta/), [4](https://gitlab.com/projects261/firefox-nightly-flatpak/-/tree/main)]

Option 1: Unofficial Flatpak (Most "Chromium-like")

Community maintainers provide a `.flatpakref` that allows you to install and update Nightly like a standard Flatpak app. This is the closest way to keep the flag-based workflow you want while staying within the Flatpak ecosystem. \[[1](https://discussion.fedoraproject.org/t/whats-the-best-way-to-install-firefox-nightly-and-developer-edition/89275), [2](https://en.ubunlog.com/How-to-install-Firefox-nightly-on-Ubuntu%3A-a-complete-step-by-step-guide/), [3](https://gitlab.com/projects261/firefox-nightly-flatpak)]

- **Install Command**:\
  `flatpak install --from https://firefox-flatpak.mojefedora.cz/org.mozilla.FirefoxNightly.flatpakref`
- **Run Command**:\
  `flatpak run org.mozilla.FirefoxNightly` \[[1](https://community.endlessos.com/t/how-to-install-firefox-nightly-at-the-endless-os/4102), [2](https://discussion.fedoraproject.org/t/whats-the-best-way-to-install-firefox-nightly-and-developer-edition/89275), [3](https://en.ubunlog.com/How-to-install-Firefox-nightly-on-Ubuntu%3A-a-complete-step-by-step-guide/)]

Option 2: The Official .deb Repository (Recommended for Ubuntu)

Mozilla recently launched an official APT repository specifically for **Debian-based systems** like Ubuntu. This is generally more stable than unofficial Flatpaks and integrates perfectly with your system's update manager. \[[1](https://blog.nightly.mozilla.org/2023/10/30/introducing-mozillas-firefox-nightly-deb-packages-for-debian-based-linux-distributions/), [2](https://www.makeuseof.com/firefox-nightly-install-debian-ubuntu-how/)]

1. **Import the Signing Key**:\
   `wget -q https://packages.mozilla.org/apt/repo-signing-key.gpg -O- | sudo tee /etc/apt/keyrings/packages.mozilla.org.asc > /dev/null`
2. **Add the Repository**:\
   `echo "deb [signed-by=/etc/apt/keyrings/packages.mozilla.org.asc] https://packages.mozilla.org/apt mozilla main" | sudo tee /etc/apt/sources.list.d/mozilla.list > /dev/null`
3. **Install Nightly**:\
   `sudo apt update && sudo apt install firefox-nightly` \[[1](https://www.makeuseof.com/firefox-nightly-install-debian-ubuntu-how/)]

Why this solves your problem

Once either version is installed, you can open `about:config`, set `xpinstall.signatures.required` to **false**, and your sideloaded extensions will stay installed permanently. \[[1](https://en.ubunlog.com/How-to-install-Firefox-nightly-on-Ubuntu%3A-a-complete-step-by-step-guide/)]

Unlike Chromium, you do **not** need to include a flag in your launch command every time; Firefox will remember the setting in your profile. \[[1](https://www.youtube.com/watch?v=Gvh3PxD%5Fp50)]

Would you like help **syncing your extensions** and settings from your current Flatpak to the new Nightly installation?

- [link](https://discussion.fedoraproject.org/t/whats-the-best-way-to-install-firefox-nightly-and-developer-edition/89275)\
  What's the best way to install Firefox Nightly and Developer ...\
  1 Like. Installing firefox nightly. dalto (dalto) September 7, 2023, 12:54am 2. You can download them directly from Mozilla and un...\
  Fedora Discussion
- [link](https://discussion.fedoraproject.org/t/firefox-nightly-flatpak/146973)\
  Firefox nightly flatpak - Fedora Discussion\
  monkeygold (Monkey) March 12, 2025, 9:37pm 1. Is there an official nightly Flatpak for Fedora? I've seen some links here that are ...\
  Fedora Discussion
- [link](https://www.reddit.com/r/firefox/comments/fhf68j/official%5Ffirefox%5Fflatpak%5Favailable%5Fon%5Fflathubbeta/)\
  Official Firefox Flatpak available on Flathub-Beta - Reddit\
  Discussion. A recent Bugzilla thread revealed that an official Flatpak for Firefox Beta (v76) is now available from Mozilla. You c...\
  Reddit

Show all

how to install permanent ext on nightly

9:39 AM

To install an extension permanently on Firefox Nightly, you first have to "unlock" the browser's ability to accept unsigned files.

Step 1: Enable Unsigned Extensions

1. Open **Firefox Nightly**.
2. Type `about:config` in the address bar and press Enter.
3. Click **"Accept the Risk and Continue"**.
4. Search for: `xpinstall.signatures.required`.
5. Double-click it (or click the toggle button) to set it to **false**.

Step 2: Prepare your Extension

Firefox requires extensions to have a unique ID in their metadata to stay installed across restarts.

1. Open your extension's `manifest.json` file.

2. Add a `browser_specific_settings` block if it isn't there. It should look like this:\
   json

<!---->

```
"browser_specific_settings": {
  "gecko": {
    "id": "my-custom-tool@example.com"
  }
}
```

Use code with caution.\
_Note: The ID can be any email-like string._

Step 3: Install the File

1. Type `about:addons` in the address bar.
2. Click the **Gear icon** (⚙️) in the top right area.
3. Select **"Install Add-on From File..."**.
4. Select your `.xpi` file (or your zipped extension folder).
5. Click **Add** when the permission prompt appears.

Why this is "Permanent"

Because you are on Nightly and have toggled the `signatures.required` flag, Firefox will no longer check if the extension was signed by Mozilla. It will remain in your active extensions list even after you close and reopen the browser.

**Tip for Flatpak Users:** If you are using the Nightly Flatpak, make sure your extension file is in a folder the Flatpak can see (like your **Downloads** folder), otherwise the file picker might not show it.

Do you have your extension files ready as a **.zip** or **.xpi** yet?

how can i patch the standard firefox or put the extension directly in fs to sideload

9:42 AM

Sideloading extensions by manually placing them in the filesystem or patching the standard Firefox binary is technically possible but significantly more complex—especially with a **Flatpak** installation due to its sandboxed environment.

1\. File System Sideloading (Global Installation)

Historically, you could drop an extension into a "magic" folder to auto-install it for all profiles. While Mozilla has largely disabled this to prevent malware, you can still attempt a "Global" install by placing an **unpacked** extension into a specific directory named after the extension’s ID.

- **Flatpak Location**: `~/.var/app/org.mozilla.firefox/.mozilla/extensions/`
- **Standard Location**: `/usr/lib/firefox/browser/extensions/`
- **Requirement**: The folder name **must** be the extension's ID (e.g., `my-extension@example.com`).
- **Caveat**: On standard Firefox, the browser will still see the extension is unsigned and likely refuse to load it unless you use a "monkey patch" or a specific configuration script.

2\. Patching Firefox (`omni.ja`)

If you are determined to use standard Firefox, you can "monkey patch" the internal code responsible for signature checks. This involves modifying the `omni.ja` file, which is a compressed archive containing Firefox's internal JavaScript logic.

- **The Goal**: Modify the `AppConstants.jsm` or similar internal scripts to force `MOZ_REQUIRE_SIGNING` to `false`.
- **The Process**:
  1. Locate `omni.ja` (for Flatpak, this is inside the protected app runtime).
  2. Extract it using a ZIP tool (using "store" compression mode is critical when repacking).
  3. Edit the JavaScript files to bypass the signature check.
  4. Repack and replace the original file.
- **Difficulty**: **Extreme**. Patching must be redone after **every single browser update**, or your changes will be overwritten.

3\. Using `autoconfig` (The "Corporate" Method)

This is the most reliable way to modify browser behavior without patching binaries. You can drop two configuration files into your Firefox installation that execute JavaScript at startup to disable signing checks.

- **File 1**: `defaults/pref/autoconfig.js`\
  javascript

<!---->

```
pref("general.config.filename", "firefox.cfg");
pref("general.config.obscure_value", 0);
```

Use code with caution.

- **File 2**: `firefox.cfg` (in the root program folder)\
  javascript

<!---->

```
// First line must be a comment
lockPref("xpinstall.signatures.required", false);
```

Use code with caution.

- **Flatpak Issue**: You cannot easily modify the internal "program folder" of a Flatpak. You would need to use `flatpak override` to mount a custom folder over the internal `defaults/pref` directory, which is highly unstable.

**The Bottom Line:**\
While you _can_ patch standard Firefox, it is a high-maintenance "cat and mouse" game with every update. For a Flatpak user on Ubuntu, the most stable path remains using **Firefox Nightly** or **Developer Edition**, where these flags work out of the box.

Would you like the **scripts for the `autoconfig` method** so you can try them on your Flatpak?

- [link](https://www.reddit.com/r/firefox/comments/1jbhi1v/how%5Fdo%5Fi%5Freenable%5Fextensions%5Fthat%5Fare%5Fnot/)\
  r/firefox on Reddit: How do i re-enable extensions that are not ...\
  If you're going to try Winrar: \* Rename the file as omni.zip. \* Unpack into a folder \omni. \* Find and edit the file (only 1 file ...\
  Reddit
- [link](https://www.reddit.com/r/firefox/comments/rq40cj/cant%5Ffind%5Fprofile%5Ffolder%5Ffor%5Ffirefox%5Fflatpak%5Fon/)\
  Can't find profile folder for Firefox Flatpak on GNU/Linux system\
  You could try using Flatseal to make sure the flatpak has permission to read and write to your local filesystem. Sometimes the fla...\
  Reddit
- [link](https://stebalien.com/blog/disable-compulsory-addon-signature-verification-in-firefox-48/)\
  Disabling Firefox Addon Signature Verification\
  As of Firefox 48, it's impossible to disable mandatory addon signature verification without monkey patching Firefox or recompiling...\
  stebalien.com

Show all

write a simple hello world extension

9:44 AM

To create a "Hello World" extension, you only need two files. One tells Firefox what the extension is, and the other contains the actual code.

1\. The `manifest.json`

This is the most important file. It contains the **Add-on ID** we discussed earlier, which is required for permanent installation on Nightly/Developer versions.

Create a folder named `hello-extension` and save this as `manifest.json`:

json

```
{
  "manifest_version": 2,
  "name": "Hello World Extension",
  "version": "1.0",
  "description": "My first sideloaded extension.",

  "browser_specific_settings": {
    "gecko": {
      "id": "hello-world@mysideloader"
    }
  },

  "browser_action": {
    "default_title": "Say Hello",
    "default_popup": "popup.html"
  },

  "permissions": [
    "activeTab"
  ]
}
```

Use code with caution.

2\. The `popup.html`

This is the small window that appears when you click the extension icon. Save this as `popup.html` in the same folder:

html

```
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        width: 150px;
        text-align: center;
        font-family: sans-serif;
      }
      h1 { color: #ff9500; }
    </style>
  </head>
  <body>
    <h1>Hello!</h1>
    <p>It works!</p>
  </body>
</html>
```

Use code with caution.

How to load it:

1. In Firefox Nightly, go to `about:addons`.
2. Click the **Gear icon** → **Install Add-on From File...**.
3. Zip the folder (or just select the `manifest.json` if prompted) and it will install.

**Pro-tip for testing:** If you don't want to zip/unzip while coding, go to `about:debugging`, click **"This Firefox"**, then **"Load Temporary Add-on"** and select the `manifest.json`. This lets you see changes instantly!

Would you like to add a **background script** so it can interact with the websites you visit?

appears to be corrupt

9:46 AM

The "appears to be corrupt" error in [Firefox](https://www.firefox.com/) is often a generic message triggered by specific issues in the extension's `manifest.json` or the way it was packaged, rather than actual file corruption. \[[1](https://support.mozilla.org/en-US/questions/1440947), [2](https://discourse.mozilla.org/t/stumped-by-corrupt-extension/134418)]

1\. Missing or Incorrect Add-on ID

For sideloaded extensions (those not loaded via `about:debugging`), Firefox **requires** a unique ID. \[[1](https://stackoverflow.com/questions/74683819/the-extension-id-is-required-in-manifest-version-3-and-above-firefox-error-in-m), [2](https://discourse.mozilla.org/t/stumped-by-corrupt-extension/134418)]

- **Fix**: Ensure your `manifest.json` includes a `browser_specific_settings` block with an ID formatted like an email.\
  json

<!---->

```
"browser_specific_settings": {
  "gecko": {
    "id": "hello-world@mysideloader"
  }
}
```

Use code with caution.\
\[[1](https://support.mozilla.org/en-US/questions/1205572), [2](https://support.mozilla.org/en-US/questions/1438050)]

2\. Compression Issues

A common mistake is zipping the **parent folder** instead of the files themselves. \[[1](https://stackoverflow.com/questions/39854127/add-on-appears-to-be-corrupt-when-trying-to-install-my-add-ons-xpi-file-in-f), [2](https://stackoverflow.com/questions/39854127/add-on-appears-to-be-corrupt-when-trying-to-install-my-add-ons-xpi-file-in-f)]

- **Fix**: Select only the `manifest.json`, `popup.html`, and other icons/scripts, then right-click and select **Compress/Zip**.
- **Flatpak Tip**: Ensure you are using "Deflate" or "Store" compression. Some exotic compression methods used by Flatpak archive managers may cause the browser to fail to read the zip. \[[1](https://stackoverflow.com/questions/39854127/add-on-appears-to-be-corrupt-when-trying-to-install-my-add-ons-xpi-file-in-f), [2](https://support.mozilla.org/en-US/questions/1205572), [3](https://www.youtube.com/watch?v=DIX76BwzNv4)]

3\. Out-of-Sync System Clock

Firefox uses the system time to verify certificates and internal security signatures. If your Ubuntu clock is incorrect, the installation may fail with a corruption error. \[[1](https://discourse.mozilla.org/t/installation-aborted-because-the-add-on-appears-to-be-corrupt/43045), [2](https://www.youtube.com/watch?v=DIX76BwzNv4)]

- **Fix**: Run `timedatectl set-ntp true` in your terminal to sync your clock with network time.

4\. Permission Restrictions (Flatpak)

Since you are using the Flatpak version, the browser may be unable to "see" your `.xpi` file if it is in a protected directory. \[[1](https://support.mozilla.org/en-US/kb/resolve-installation-error-windows)]

- **Fix**: Move your extension file to your **Downloads** folder before trying to install it, as Flatpaks typically have standard permission to read from that directory.

Quick Troubleshooting Tool

To find the _exact_ reason for the error, open the **Browser Console** (`Ctrl + Shift + J`) before attempting the installation. It will log a red error message explaining specifically what is invalid in your manifest. \[[1](https://www.reddit.com/r/firefox/comments/1kixuwp/how%5Fcome%5Fthis%5Fextension%5Fcode%5Fis%5Fcorrupt%5Fwhen%5Fi/), [2](https://support.mozilla.org/en-US/questions/1205572)]

Did you **zip the individual files** or the entire folder?

- [link](https://support.mozilla.org/en-US/questions/1440947)\
  Installing edited add-on gives "Installation aborted because the add- ...\
  You have to sign your extension, even for private use. You can select the Unlisted mode, then the extension won't be visible on AM...\
  Support Mozilla
- [link](https://www.reddit.com/r/firefox/comments/1kixuwp/how%5Fcome%5Fthis%5Fextension%5Fcode%5Fis%5Fcorrupt%5Fwhen%5Fi/)\
  r/firefox on Reddit: How come this extension code is corrupt ...\
  Comments Section. Private-Citizen. • 1y ago. What is the console error and errors showing on about:debugging ? It will tell you wh...\
  Reddit
- [link](https://discourse.mozilla.org/t/stumped-by-corrupt-extension/134418)\
  Stumped by "corrupt" extension - Mozilla Discourse\
  Your first extension - Mozilla | MDN. This article walks through creating an extension for Firefox, from start to finish. The exte...\
  Mozilla Discourse

Show all

ive toggled the flag, pasted the exact code. corrupted. whether manifest or zip or rename zip to xpi

9:49 AM

The "appears to be corrupt" error when installing from a file is almost always a **manifest syntax error** or a **packaging mistake**. In Firefox Nightly, the `xpinstall.signatures.required: false` flag works, but only if the browser can successfully parse the underlying code. \[[1](https://support.mozilla.org/en-US/questions/1440947), [2](https://support.mozilla.org/en-US/questions/1440947)]

1\. Fix the Manifest "Gotcha" \[[1](https://www.ghacks.net/2015/08/04/fix-for-installing-unsigned-add-ons-in-firefox-dev-and-nightly/)]

For permanent sideloading, Firefox Nightly requires the `id` field. A common error is placing this field in the wrong block. In **Manifest V2**, it must be under `browser_specific_settings` (formerly `applications`). \[[1](https://discourse.mozilla.org/t/odd-corruption-with-a-firefox-extension/111163), [2](https://discourse.mozilla.org/t/stumped-by-corrupt-extension/134418), [3](https://discourse.mozilla.org/t/this-add-on-could-not-be-installed-because-it-appears-to-be-corrupted/135626)]

Ensure your `manifest.json` looks exactly like this, with **no trailing commas**:

json

```
{
  "manifest_version": 2,
  "name": "Hello World Extension",
  "version": "1.0",
  "description": "My first sideloaded extension.",
  "browser_specific_settings": {
    "gecko": {
      "id": "hello-world@mysideloader"
    }
  },
  "browser_action": {
    "default_title": "Say Hello",
    "default_popup": "popup.html"
  }
}
```

Use code with caution.

- **Verification**: Run your code through a JSON Validator to ensure there are no hidden syntax errors. \[[1](https://stackoverflow.com/questions/33758001/manifest-is-not-valid-json-line-1-column-1-unexpected-token), [2](https://www.reddit.com/r/OperaGX/comments/1q1jtaa/what%5Fdose%5Fthis%5Ferror%5Fmean%5Ffor%5Fmy%5Fextension%5Fand/)]

2\. Verify the ZIP Structure (Crucial)

Firefox will report "corrupt" if it opens your `.xpi` and finds a folder instead of the code files. \[[1](https://github.com/mozilla/addons/issues/932)]

- **Wrong**: Zipping the `hello-extension/` folder.
- **Right**: Opening the folder, selecting `manifest.json` and `popup.html`, and zipping **those files directly**.
- **Result**: When you open the `.zip` or `.xpi`, the `manifest.json` should be at the **root level**, not inside a subfolder. \[[1](https://stackoverflow.com/questions/39854127/add-on-appears-to-be-corrupt-when-trying-to-install-my-add-ons-xpi-file-in-f), [2](https://support.mozilla.org/en-US/questions/1205572), [3](https://discourse.mozilla.org/t/stumped-by-corrupt-extension/134418), [4](https://github.com/mozilla/addons/issues/932)]

3\. Check the Browser Console for the "Real" Error \[[1](https://support.mozilla.org/en-US/questions/1205572)]

Firefox logs the specific reason it thinks the file is corrupt in the **Browser Console** (not the standard Web Console). \[[1](https://gitlab.com/librewolf-community/browser/linux/-/issues/293), [2](https://support.mozilla.org/en-US/questions/1205572)]

1. Press `Ctrl + Shift + J`.
2. Clear the logs.
3. Try to install your extension again.
4. Look for red text starting with `addons.xpi WARN Invalid XPI`. This will tell you exactly which line of your manifest is failing. \[[1](https://stackoverflow.com/questions/39854127/add-on-appears-to-be-corrupt-when-trying-to-install-my-add-ons-xpi-file-in-f), [2](https://support.mozilla.org/en-US/questions/1205572), [3](https://gitlab.com/librewolf-community/browser/linux/-/issues/293)]

4\. Flatpak Specifics

If you are still seeing "corrupt," the Flatpak sandbox may be preventing Firefox from reading the file metadata correctly. \[[1](https://knowledge.broadcom.com/external/article/292139/audit-and-remediation-failed-to-read-man.html)]

- **Workaround**: Move your `.xpi` to `~/Downloads` or your **Home** directory before selecting it in the file picker. Files on external drives or deep system paths may have restricted permissions in a Flatpak environment.

If you check the **Browser Console** (`Ctrl+Shift+J`), what is the **exact error message** it gives when you try to install?

- [link](https://stackoverflow.com/questions/39854127/add-on-appears-to-be-corrupt-when-trying-to-install-my-add-ons-xpi-file-in-f)\
  Add-on "appears to be corrupt" when trying to install my add ...\
  After receiving e-mail from amo-editors@mozilla.org , I went to my add-on's page and clicked on . xpi file link there and it worke...\
  Stack Overflow
- [link](https://support.mozilla.org/en-US/questions/1205572)\
  How do I install an unsigned addon on the Developer edition?\
  1\. Grab all the files for your WebExtension and package them directly (not in a folder) in an uncompressed zip. 2. Replace the . z...\
  Mozilla Support
- [link](https://discourse.mozilla.org/t/odd-corruption-with-a-firefox-extension/111163)\
  Odd Corruption with a Firefox Extension - Mozilla Discourse\
  Try to load the addon in the “about:debugging” page, it will probably print some error there saying what's wrong. In any case, I t...\
  Mozilla Discourse

Show all

im using the official deb nightly. 1778259058892addons.xpiWARNInvalid XPI: \[Exception... "Component returned failure code: 0x80004005 (NS\_ERROR\_FAILURE) \[nsIZipReader.open]" nsresult: "0x80004005 (NS\_ERROR\_FAILURE)" location: "JS frame :: resource://gre/modules/addons/XPIInstall.sys.mjs :: XPIPackage :: line 310" data: no] Stack trace: XPIPackage()@resource://gre/modules/addons/XPIInstall.sys.mjs:310get()@resource://gre/modules/addons/XPIInstall.sys.mjs:208loadManifest()@resource://gre/modules/addons/XPIInstall.sys.mjs:1587init()@resource://gre/modules/addons/XPIInstall.sys.mjs:2328createLocalInstall()@resource://gre/modules/addons/XPIInstall.sys.mjs:3385getInstallForFile()@resource://gre/modules/addons/XPIInstall.sys.mjs:4779XPIProvider\[meth]\()@resource://gre/modules/addons/XPIProvider.sys.mjs:3674promiseCallProvider()@resource://gre/modules/AddonManager.sys.mjs:305getInstallForFile/<()@resource://gre/modules/AddonManager.sys.mjs:1899getInstallForFile()@resource://gre/modules/AddonManager.sys.mjs:1913getInstallForFile()@resource://gre/modules/AddonManager.sys.mjs:4381installAddonsFromFilePicker/

9:51 AM

The error code `0x80004005 (NS_ERROR_FAILURE)` specifically at `nsIZipReader.open` means Firefox **cannot physically open or read the ZIP archive**. This isn't a code error; it's a file structure or permission error.

Since you've moved to the official `.deb` Nightly, we can rule out Flatpak sandbox issues. Here is exactly why that error happens and how to fix it:

1\. The "Nested Folder" Mistake (Most Common)

If you right-click a folder named `hello-extension` and hit "Compress," your ZIP structure looks like this:

- `hello-extension.zip`
  - `hello-extension/` <— **Firefox fails here**
    - `manifest.json`

**The Fix**: You must select the **files inside** the folder, right-click them, and compress. The `manifest.json` **must** be at the very top level when you open the ZIP.

2\. Linux "Symbolic Link" or Archive Type

If you are using a GUI archive manager on Ubuntu, it might be creating a `.7z` or using a compression level Firefox's `nsIZipReader` doesn't like.

**The Fix (Terminal Method)**:\
Use the terminal to ensure a clean, standard ZIP structure. Run these commands inside your project folder:

bash

```
# Delete any old attempts
rm -f hello-world.xpi

# Zip the files directly (not the parent folder)
zip -r hello-world.xpi manifest.json popup.html
```

Use code with caution.

3\. File Permissions

If you created the files as `root` or in a restricted directory (like `/tmp`), the Firefox process might not have read access to the `.xpi`.

- **The Fix**: Ensure the file is in your home directory (e.g., `~/Downloads`) and run:\
  `chmod 644 hello-world.xpi`

4\. Direct Loading (The "Unpacked" Workaround)

If zipping keeps failing, skip it entirely using the "Load Temporary" feature to verify the code is valid:

1. Go to `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on...**.
3. Navigate to your folder and select the **manifest.json** file directly.
4. If this works, your code is 100% fine, and the "Corrupt" error was definitely just a ZIP formatting issue.

**Which compression tool are you using** (e.g., GNOME Archive Manager, `zip` command, or VS Code extension)?

well, it works now. the cause is the nested folder. can i select the manifest.json? which fails in my test.

9:54 AM

Glad to hear the zip fix worked! To answer your question: **No, you cannot select the `manifest.json` file alone** for a permanent installation via `about:addons`.

Here is why it fails and how to handle it:

1\. Why `manifest.json` fails on `about:addons`

The **"Install Add-on From File..."** menu expects a single packaged archive (a `.xpi` or `.zip`).

- When you select just the `manifest.json`, Firefox looks for the rest of the extension (like `popup.html`) _inside_ that file.
- Since a `.json` file isn't a zip archive, the `nsIZipReader` fails immediately, giving you that same "corrupt" error.

2\. When you _can_ select `manifest.json`

The only place you can select the `manifest.json` directly is under **`about:debugging`** (Load Temporary Add-on).

- This is designed for developers to test "unpacked" extensions.
- **The Catch**: As we discussed, extensions loaded this way vanish the moment you restart Firefox.

3\. The "Unpacked" Workaround (Permanent-ish)

If you hate zipping files every time you make a change, there is one trick for Nightly/Developer users:

1. **Zip it once** and install it via `about:addons` so it becomes "permanent."
2. Find where Firefox installed it in your profile (usually `~/.mozilla/firefox/[profile-name]/extensions/`).
3. **Delete** the `.xpi` file there and replace it with a **Symbolic Link** (folder shortcut) pointing to your development folder.
4. Firefox will now load your live code directly from your folder every time it starts.

**To recap**: For a standard "Permanent" install through the UI, you must always provide the **ZIP/XPI** containing all your files at the root level.

Since you've got "Hello World" running, would you like to see how to add a **Content Script** to change the background color of the websites you visit?

fact check

The information regarding the fix for your "corrupt" error and the requirements for permanent installation in Firefox Nightly is **accurate** as of May 2026.

Verification of Reported Fixes

- **Nested Folder Issue**: Firefox’s `nsIZipReader` requires the `manifest.json` to be at the **root level** of the archive. Zipping a parent folder instead of its contents creates a subfolder that the browser cannot parse as a valid extension structure.
- **Selecting manifest.json**: You confirmed this fails for permanent installs, which is expected. The [Add-on Manager](https://support.mozilla.org/en-US/questions/1352524) (`about:addons`) only accepts packaged `.xpi` or `.zip` files. Selecting a raw `.json` file will always trigger a "corrupt" error because it lacks the necessary archive structure.
- **Error Code 0x80004005**: This specific failure is a low-level "unspecified error" that occurs when the [ZipReader component](https://learn.microsoft.com/en-au/answers/questions/2420929/0x80004005-unspecified-error-during-unzipping) cannot access or correctly map the internal directory of an archive. \[[1](https://support.mozilla.org/en-US/questions/1205572), [2](https://dev.to/alanwest/how-to-programmatically-install-firefox-extensions-and-why-it-breaks-2b01), [3](https://extensionworkshop.com/documentation/publish/package-your-extension/), [4](https://support.mozilla.org/en-US/questions/1352524), [5](https://web-highlights.com/tutorials/browser/firefox/how-to-install-from-local-file), [6](https://www.youtube.com/watch?v=nXudDfhsEb4\&t=3), [7](https://www.howtogeek.com/810837/how-to-fix-error-code-0x80004005-on-windows-10-and-11/)]

Current Sideloading Requirements (May 2026)

- **Nightly/Developer Exemption**: The `xpinstall.signatures.required: false` flag remains the only official way to install unsigned code permanently. Standard releases still ignore this setting.
- **ID Requirement**: Sideloaded extensions must have a unique ID in the manifest for Firefox to manage them across sessions.
- **Temporary vs. Permanent**: Selecting the `manifest.json` is only supported via [about:debugging](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), which is explicitly for temporary testing and does not persist after a restart. \[[1](https://stackoverflow.com/questions/62237202/firefox-add-ons-how-to-install-my-own-local-add-on-extension-permanently-in-f), [2](https://stackoverflow.com/questions/47363481/install-a-personal-firefox-web-extension-permanently), [3](https://www.osnews.com/story/130847/firefox-to-discontinue-sideloaded-extensions-but-dont-grab-your-pitchforks/), [4](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your%5Ffirst%5FWebExtension), [6](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), [7](https://web-highlights.com/tutorials/browser/firefox/how-to-install-from-local-file)]

For ongoing development, using the [web-ext tool](https://extensionworkshop.com/documentation/publish/package-your-extension/) is recommended to automate the zipping process and avoid recurring "corrupt" errors from manual packaging. \[[1](https://extensionworkshop.com/documentation/publish/package-your-extension/), [2](https://stackoverflow.com/questions/62237202/firefox-add-ons-how-to-install-my-own-local-add-on-extension-permanently-in-f)]

- [link](https://support.mozilla.org/en-US/questions/1205572)\
  How do I install an unsigned addon on the Developer edition?\
  Feb 16, 2018 — So in summary, the process is: 1. Grab all the files for your WebExtension and package them directly (not in a folder) in an uncom...\
  Mozilla Support
- [link](https://extensionworkshop.com/documentation/publish/package-your-extension/)\
  Package your extension\
  Apr 27, 2021 — During development, your extension will consist of a directory containing a manifest. json file and the other files the extension ...\
  Firefox Extension Workshop
- [link](https://web-highlights.com/tutorials/browser/firefox/how-to-install-from-local-file)\
  How to Install an Extension from a Local File in Firefox\
  Download the extension file as a . xpi file. If you have a . zip, extract it first. Open Firefox and enter about:debugging#/runtim...\
  Web Highlights

Show all