# . install

```sh
 ~/Documents/.storage % cd liberchat
cd: no such file or directory: liberchat
 ~/Documents/.storage % cd librechat
 ~/Documents/.storage/librechat
 % docker compose up -d
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
[+] up 6/6
 ✔ Network librechat_default  Created                                                                                             0.1s
 ✔ Container vectordb         Started                                                                                             0.7s
 ✔ Container chat-meilisearch Started                                                                                             0.7s
 ✔ Container chat-mongodb     Started                                                                                             0.7s
 ✔ Container rag_api          Started                                                                                             0.7s
 ✔ Container LibreChat        Started                                                                                             0.9s
 ~/Documents/.storage/librechat
 % docker ps
CONTAINER ID   IMAGE                                                                 COMMAND                  CREATED              STATUS              PORTS                                         NAMES
aac6cc223c91   registry.librechat.ai/danny-avila/librechat-dev:latest                "docker-entrypoint.s…"   About a minute ago   Up About a minute   0.0.0.0:3080->3080/tcp, [::]:3080->3080/tcp   LibreChat
4a2b46b30fc8   registry.librechat.ai/danny-avila/librechat-rag-api-dev-lite:latest   "python main.py"         About a minute ago   Up About a minute                                                 rag_api
d53834d1ba95   pgvector/pgvector:0.8.0-pg15-trixie                                   "docker-entrypoint.s…"   About a minute ago   Up About a minute   5432/tcp                                      vectordb
1f46995d38ac   mongo:8.0.20                                                          "docker-entrypoint.s…"   About a minute ago   Up About a minute   27017/tcp                                     chat-mongodb
f8043b9ee36d   getmeili/meilisearch:v1.35.1                                          "tini -- /bin/sh -c …"   About a minute ago   Up About a minute   7700/tcp                                      chat-meilisearch
```

# how to see which port a docker app is running

To see which port a Docker container is running on, use the `docker ps` command in your terminal. \[[1](https://www.warp.dev/terminus/docker-compose-port-mapping)]

### Quick Commands

- **List all running containers:**\
  `docker ps`\
  Look under the **PORTS** column to see host-to-container mappings.
- **Find a specific container by name:**\
  `docker ps --filter "name=your_container_name"`
- **Inspect precise port configurations:**\
  `docker inspect --format='{{range $p, $conf := .NetworkSettings.Ports}}{{$p}} -> {{(index $conf 0).HostPort}}{{end}}' your_container_name` \[[1](https://medium.com/@theinnerpeace.me/how-to-know-container-port-docker-container-shibb-esp2-f816c096928e), [2](https://labex.io/tutorials/docker-how-to-filter-docker-containers-by-name-417741), [3](https://stackoverflow.com/questions/34096858/how-do-i-debug-docker-port-mapping)]

### Reading the Output

When you run `docker ps`, look for the format `0.0.0.0:8080->80/tcp`. \[[1](https://labex.io/questions/how-to-check-which-ports-are-in-use-227653)]

- **8080** is the port on your physical computer.
- **80** is the port inside the Docker container. \[[1](https://codesignal.com/learn/courses/docker-images-containers/lessons/executing-containers-with-custom-port-mapping), [2](https://docs.docker.com/get-started/docker-concepts/running-containers/publishing-ports/)]

### Alternative Method

If you use **Docker Desktop**, open the application dashboard, click on the **Containers** tab, and look at the **Port(s)** column next to your running container. \[[1](https://helpcenter.online.usc.edu/s/article/Docker-Port-Binding-Conflict-for-Port-number), [2](https://www.reddit.com/r/docker/comments/18iy3qb/how%5Fto%5Faccess%5Fthe%5Fapplication%5Fafter%5Finstalling/)]

***

To help you troubleshoot further, let me know if you are trying to **change the port**, if the port looks correct but **you cannot connect**, or if you need help **mapping multiple ports**.

- [link](https://www.warp.dev/terminus/docker-compose-port-mapping)\
  Understand Port Mapping in Docker Compose\
  Dec 20, 2023 — Note that to verify which ports are exposed, you can use the docker ps command to list all the active Docker containers and their ...\
  \
  \
  www.warp.dev
- [link](https://medium.com/@theinnerpeace.me/how-to-know-container-port-docker-container-shibb-esp2-f816c096928e)\
  How to know container port — Docker container — Shibb Esp2\
  Apr 3, 2023 — To check which ports are being used by a Docker container, you can use the docker ps command to list all running containers and th...\
  \
  Medium
- [link](https://labex.io/tutorials/docker-how-to-filter-docker-containers-by-name-417741)\
  How to filter Docker containers by name\
  Summary Basic Container Listing: You learned how to use the docker ps command to view running containers and its various options l...\
  \
  LabEx

Show all

# librechat shows a login page by default what do you think

It is standard practice for LibreChat to show a login page by default. This design choice focuses on privacy, security, and multi-user management. \[[1](https://www.reddit.com/r/LLMDevs/comments/15991qd/one%5Fui%5Fto%5Frule%5Fthem%5Fall%5Fintroducing%5Flibrechat%5Fan/)]

### Why LibreChat Defaults to Login

- **Secure Access**: Protects your API keys and server resources from unauthorized public use.
- **User Isolation**: Keeps chat histories, custom presets, and settings private to each user.
- **Resource Control**: Prevents random internet users from draining your paid AI model balances.

### How to Bypass It (If Desired)

If you are the only user and want a seamless, no-login experience, you can modify your configuration:

1. **Enable Anonymous Access**: Set `ALLOW_REGISTRATION=false` and configure single-user automatic login in your `.env` file if using specific reverse proxy setups.
2. **Use Social Logins**: Enable Google or GitHub OAuth in your config to log in with a single click instead of typing passwords.

To help you configure this perfectly, tell me:

- Are you running this **locally** or on a **cloud server**?

- Do you want to **skip login entirely** or just make it **easier to sign in**?

- Will **other people** need access to your instance?

- [link](https://www.reddit.com/r/LLMDevs/comments/15991qd/one%5Fui%5Fto%5Frule%5Fthem%5Fall%5Fintroducing%5Flibrechat%5Fan/)\
  One UI to Rule Them All: Introducing LibreChat, an Open Source Enhanced ChatGPT Clone with AI Model Switching, LangChain Plugins, & More : r/LLMDevs\
  Jul 25, 2023 — Was caught off guard by this initially but everything is stored locally - there's no Librechat server. The login system is just fo...\
  \
  \
  Reddit

## You said: what do you think from the ux perspective

From a User Experience (UX) perspective, <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">defaulting to a login page is a major point of <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">friction</strong>, but it is a necessary compromise based on the application's context</mark>.

Here is a breakdown of how this design impacts the user.

### The Downside: High Friction

- **Barrier to Entry**: Users expect modern web tools to let them try features before committing. A strict login wall stops immediate exploration.
- **Cognitive Load**: Forcing users to remember another set of credentials creates a bad first impression. \[[1](https://uxdesign.cc/three-ways-that-ux-designers-can-gain-insight-from-the-marketing-team-adb6a256d2d8)]

### The Benefit: Trust and Safety

- **Clear Boundaries**: In AI tools, data privacy is a top user anxiety. A login page sends a strong visual signal that "your data and conversations are secure and private."
- **Personalization Expectation**: Users inherently understand that custom presets, saved prompts, and history require an account to persist. \[[1](https://www.authgear.com/post/login-signup-ux-guide/)]

### How to Improve the LibreChat UX

If you are configuring LibreChat for yourself or an organization, you can fix this friction easily:

- **Implement OAuth (Social Login)**: Add Google, GitHub, or Discord buttons. This turns a multi-step form into a single, effortless click.
- **Enable "Remember Me"**: Ensure the session duration is long so returning users rarely see the login screen again.
- **Custom Landing Page**: If hosting publicly, use LibreChat's configuration to show a welcoming landing page _before_ the login wall to explain what the tool is.

To help you design the best flow, tell me:

- Who is your **target audience** (just you, a small team, or the public)?

- Do you have **data privacy policies** you need to display?

- Would you prefer a **completely open UI** over a login wall?

- [link](https://uxdesign.cc/three-ways-that-ux-designers-can-gain-insight-from-the-marketing-team-adb6a256d2d8)\
  Three ways that UX designers can gain insight from the Marketing team\
  Mar 31, 2022 — These two focuses often clash regarding how they'd design a site. One typical example of this is with login walls: when the user i...\
  \
  \
  UX Collective

- [link](https://www.authgear.com/post/login-signup-ux-guide/)\
  Login & Signup UX: The 2025 Guide to Best Practices (Examples & Tips)\
  Feb 12, 2026 — 🤝 Trust and Security Signals: The login/signup is where users hand over personal data and set credentials – it's a trust leap. Us...\
  \
  \
  Authgear

## You said: i mean for single user

From a UX perspective for a single user, a default login page is **bad design**. It creates completely unnecessary friction for an audience of one.

### Why It Fails Single-User UX

- **Redundant Security**: If you already lock your physical device or your home network is secure, locking the app itself is overkill.
- **Broken Workflow**: It forces you to type a password every few days just to ask a quick question, destroying the speed advantage of an AI assistant.
- **False Context**: The UI treats you like a stranger on your own machine.

### The Ideal Single-User UX Flow

The best UX for a single user is **zero-friction automation**. The app should launch straight into a clean, ready-to-type chat window.

### How to Fix It in LibreChat

You can achieve this ideal UX by tweaking your setup so you never see that page again.

- **Turn on Anonymous Login**: Configure LibreChat to automatically log you into a default local account upon launch.
- **Maximize Session Lifespan**: If you must use a login, update your `.env` file to set the token expiration (`JWT_REFRESH_EXPIRATION`) to a massive window, like 365 days.

To help you eliminate this screen, tell me:

- Are you running LibreChat via **Docker Compose** or a **local npm build**?
- What **Operating System** are you using?
- Do you want help **editing your `.env` configuration file** to automate the login?

## You said: should the login page be opt in or opt out

The login page should be **opt-in** by default for single-user software, but for a centralized, multi-user web application like LibreChat, making it **opt-out is the safer default**. \[[1](https://docs.opensearch.org/latest/security/configuration/multi-auth/)]

From a product design and security perspective, here is how the choice breaks down:

### Why "Opt-Out" (On by Default) Wins for LibreChat

LibreChat is a self-hosted server application, not a desktop app. Because of how it is built, an opt-out login wall is the correct default for two main reasons:

- **The "Blast Radius" of API Keys**: LibreChat requires you to plug in your own API keys (OpenAI, Anthropic, etc.). If the login screen were opt-in (disabled by default) and someone exposed their local server to the internet without configuring it first, a stranger could instantly drain thousands of dollars from their credit card. \[[1](https://github.com/danny-avila/LibreChat/discussions/3797)]
- **Database Architecture**: The app relies on a database (MongoDB) to save your chat history, custom prompts, and AI settings. It needs a specific "User ID" to attach these files to. Starting with an automatic local user account ensures the data structure works out of the box. \[[1](https://github.com/danny-avila/LibreChat/blob/main/.env.example)]

### When it _Should_ Be "Opt-In" (Off by Default)

If LibreChat were packaged differently, the UX rule would completely flip:

- **If it were a Desktop App**: If you downloaded a `.exe` or `.app` file that ran entirely on your local machine, the login page should be **opt-in**. Forcing a login on a local desktop app (like Ollama or LM Studio) is widely considered terrible UX.
- **If it utilized Browser Storage**: If chat histories were saved locally in your browser's cache rather than a cloud database, security should be opt-in.

### The Ideal Compromise: A "Single-User Mode" Flag

The best technical solution for LibreChat's UX would be an explicit installation toggle. During the initial setup, it should ask a simple question:

> _"Are you using this alone on your local machine, or hosting it for a team?"_

Choosing "Alone" would automatically opt you out of the login screen by instantly generating a permanent local session. Since that script does not exist natively, the best way to handle this is to immediately opt yourself out by adjusting the session variables in your configuration files. \[[1](https://github.com/danny-avila/LibreChat/blob/main/.env.example)]

If you want to bypass the wall completely, I can walk you through modifying your environment settings to extend your sessions permanently. Would you like to **set up a near-infinite session token** so you almost never see the screen again? \[[1](https://github.com/danny-avila/LibreChat/blob/main/.env.example), [2](https://www.librechat.ai/blog/2024-05-16%5Funsecured%5Fhttp)]

AI responses may include mistakes. For legal advice, consult a professional. [Learn more](https://support.google.com/websearch?p=aimode\&gl=us)

- [link](https://github.com/danny-avila/LibreChat/blob/main/.env.example)\
  env.example - danny-avila/LibreChat - GitHub\
  Set to true to automatically redirect to the OpenID provider when a user visits the login page. # This will bypass the login form ...\
  GitHub
- [link](https://www.librechat.ai/blog/2024-05-16%5Funsecured%5Fhttp)\
  Prevent Automatic Logout Over HTTP - LibreChat\
  May 16, 2024 — Conclusion. By adding this override configuration, we're instructing the API service to run in development mode, which disables th...\
  LibreChat
- [link](https://github.com/danny-avila/LibreChat/discussions/3797)\
  Do not expose custom endpoints to all users by default · danny-avila ...\
  Aug 27, 2024 — kirawi ... Currently, LibreChat's documentation advises users to setup custom endpoints in such a way that any user is able to uti...\
  GitHub

Show all

## You said: do most users deploy it on servers

It is a fairly even split, but the user base heavily leans toward **remote server deployments** for long-term use. \[[1](https://laimis.medium.com/running-librechat-and-staying-current-with-new-ai-models-49b40e7879dd), [2](https://www.librechat.ai/docs/remote/digitalocean)]

The user journey typically looks like this:

1. **Local Testing**: Users start by running `docker compose up` on `localhost` just to try it out or connect it to local models like Ollama.
2. **Server Migration**: Once they realize they want their chat history, custom prompts, and AI files synced across their phone, laptop, and work computers, they migrate it to a server. \[[1](https://laimis.medium.com/running-librechat-and-staying-current-with-new-ai-models-49b40e7879dd), [2](https://www.youtube.com/watch?v=mQ01jC6yP5Q\&t=137), [3](https://chatbotdesign.substack.com/p/local-offline-chatting-with-librechat), [4](https://www.librechat.ai/docs/remote/digitalocean)]

### Why Most Users End Up on Servers

- **Cross-Device Syncing**: You cannot access a strictly `localhost` deployment when you leave your house. Putting it on a server allows you to use your personal AI assistant on your phone or tablet. \[[1](https://laimis.medium.com/running-librechat-and-staying-current-with-new-ai-models-49b40e7879dd)]
- **Data Safety**: If your laptop dies or you clear your Docker volumes, your entire chat history and custom configurations disappear. Server deployments usually include automated database backups. \[[1](https://laimis.medium.com/running-librechat-and-staying-current-with-new-ai-models-49b40e7879dd), [2](https://elest.io/open-source/librechat), [3](https://elest.io/pricing), [4](https://www.red-gate.com/simple-talk/devops/database-devops/database-lifecycle-management-deployment-and-release/)]
- **Team and Family Sharing**: Many power users deploy an instance on a cheap VPS (like DigitalOcean or Linode) to share access with family members, friends, or small business teams. \[[1](https://www.librechat.ai/docs/remote/digitalocean), [2](https://thenewstack.io/open-source-librechat-offers-more-than-just-extra-llms/), [3](https://www.reddit.com/r/VPS/comments/rx0eiw/is%5Fa%5Fvps%5Flike%5Fa%5Fpc/)]
- **Always-On Features**: Modern AI capabilities like [Model Context Protocol (MCP) servers](https://www.librechat.ai/docs/features/mcp) and web-scraping agents run much better on an uninterrupted cloud instance. \[[1](https://www.librechat.ai/docs/features/mcp), [2](https://www.reddit.com/r/LocalLLaMA/comments/1o6rqay/i%5Fgot%5Ffed%5Fup%5Fwith%5Fopen%5Fwebuilibrechat%5Ffor%5Flocal/)]

Because the core architecture is built to thrive as a centralized web server, the developers chose to enforce the login page out of the box to protect those server-side deployments. \[[1](https://www.librechat.ai/docs/features/mcp), [2](https://www.reddit.com/r/LocalLLaMA/comments/1nn449p/librechat%5Fcant%5Fbe%5Fselfhosted%5Fin%5Fany%5Fcommercial/)]

Since you are running this as a single user, would you like to **see the exact lines of code** needed to change your configuration, or do you want to explore **how to safely expose it to a server** so you can use it on your phone?

- [link](https://www.librechat.ai/docs/features/mcp)\
  MCP - LibreChat\
  Streamable HTTP Servers. Uses HTTP POST for sending messages and supports streaming responses; Operates as an independent process ...\
  LibreChat
- [link](https://www.librechat.ai/docs/remote/digitalocean)\
  DigitalOcean - LibreChat\
  There are many ways to go about this, but I will present to you the best and easiest methods I'm aware of. These configurations ca...\
  LibreChat
- [link](https://www.reddit.com/r/LocalLLaMA/comments/1nn449p/librechat%5Fcant%5Fbe%5Fselfhosted%5Fin%5Fany%5Fcommercial/)\
  LibreChat can't be self-hosted in any commercial way even ...\
  Sep 21, 2025 — LibreChat can't be self-hosted in any commercial way even internally, because of MongoDB SSPL? Discussion. I want to run it but it...\
  Reddit·r/LocalLLaMA

Show all

# librechat wants name username email password and confirm password on registration and it only allows email address and password on login. what do you think.

This is a standard and highly secure authentication design. It separates the **identity creation** phase from the **access verification** phase. \[[1](https://www.librechat.ai/docs/features/authentication), [2](https://github.com/danny-avila/LibreChat/discussions/890)]

Here is why this structure works well for LibreChat:

### Registration vs. Login Logic

- **Registration Needs Context:** The system requires a **Name** and **Username** to set up your profile, display your identity in chats, and tag you in collaborative features.
- **Login Needs Simplicity:** The system only needs your **Email** and **Password** to verify who you are. Asking for usernames or names during login adds unnecessary steps.

### Why It Only Uses Email to Log In

- **Uniqueness:** Emails are globally unique. Usernames can conflict or change, but your email is a reliable identifier.
- **Security:** Requiring an email address instead of a public username makes it harder for malicious actors to guess your login credentials.
- **User Experience:** Most people remember their primary email address much better than a specific, app-defined username.

### Benefits of the Confirm Password Field

- **Typo Prevention:** It ensures you did not make a hidden typing error when creating your password.
- **Lockout Prevention:** It stops you from being immediately locked out of your brand-new account.

***

To help you optimize your LibreChat setup, let me know if you would like to:

- Learn how to **enable OAuth login** (Google, GitHub, Microsoft) to bypass passwords entirely.

- Learn how to **disable public registration** so only invited users can join your instance.

- Explore how to change your **display name** inside the application after logging in.

- [link](https://www.librechat.ai/docs/features/authentication)\
  Authentication\
  LibreChat has a user authentication system that allows users to sign up and log in securely and easily. The system is scalable and...\
  \
  LibreChat

- [link](https://github.com/danny-avila/LibreChat/discussions/890)\
  \[Question]: LibreChat not working behind nginx reverse proxy with basic\_auth · danny-avila LibreChat · Discussion #890\
  Sep 7, 2023 — LibreChat has its own built-in authentication system, so it won't know how to handle the one you're passing through to the API.\
  \
  \
  GitHub

## You said: what do you think from the ux perspective

From a User Experience (UX) perspective, this pattern is a **proven industry standard** that balances high usability with user security. \[[1](https://www.capicua.com/blog/what-does-ux-stand-for-in-technology), [2](https://www.eleken.co/blog-posts/security-ux-design), [3](https://www.linkedin.com/pulse/true-design-invisible-ux-principle-we-often-overlook-ritesh-niranjan-jonlc), [4](https://www.geeksforgeeks.org/blogs/how-does-eye-tracking-helps-in-ux-and-usability-testing/), [5](https://www.wearetenet.com/blog/enterprise-ux-design-principles)]

Here is a UX breakdown of why this design works, along with a few minor friction points.

### The Good: Why This UX Works Well

- **Reduces Cognitive Load:** During login, users want to get into the app as fast as possible. Asking _only_ for email and password keeps the form clean, familiar, and quick to fill out. \[[1](https://www.creative-blend.co.uk/the-psychological-theories-behind-effective-ux-design/)]
- **Eliminates Decision Fatigue:** Giving users the choice to log in via "Username _or_ Email" actually slows them down. Restricting it to just **Email** removes the choice and prevents them from forgetting which identifier they used to sign up. \[[1](https://dev.to/rijultp/how-nudge-theory-shapes-our-everyday-choices-and-ux-design-9ke)]
- **Clear Profile Ownership:** Gathering the Name and Username during registration ensures that the user is greeted personally ("Hello, Alex") immediately upon their first login, creating a welcoming onboarding experience.

### The Bad: Potential UX Friction Points

- **Registration Fatigue:** The registration form requires five fields. This creates higher interaction friction. Some users dislike typing their name twice (Full Name and Username) just to try out a tool.
- **The "Confirm Password" Debate:** Modern UX design is actually moving _away_ from "Confirm Password" fields. They can be annoying on mobile devices. A better UX alternative is a **"Show/Hide Password" eye icon**, which allows users to visually verify their password without typing it twice. \[[1](https://careerfoundry.com/en/blog/ux-design/10-classic-ux-design-fails/)]

### How to Improve the LibreChat UX Further

If you are hosting this instance and want to maximize user satisfaction, you can optimize this flow:

- **Enable Social Login (OAuth):** Allow users to sign up with Google or GitHub. This reduces the registration process from five fields down to **one click**, completely eliminating password friction.
- **Add Password Visibility Toggles:** Ensure your LibreChat theme has the eye icon visible so users can double-check their entry seamlessly.

***

If you are setting up or managing this instance, I can help you customize the experience. Would you like to know how to:

- Configure **Google, GitHub, or Discord login** buttons?

- Change the **logo and branding** on the login page?

- Turn off **custom usernames** to make registration faster?

- [link](https://www.capicua.com/blog/what-does-ux-stand-for-in-technology)\
  What Does UX Stand For In Technology?\
  Aug 8, 2024 — UX ( User Experience ) brings a multidimensional perspective that highlights the user's perspective and prioritizes it within the ...\
  \
  \
  www.capicua.com

- [link](https://www.eleken.co/blog-posts/security-ux-design)\
  Security and UX Design: How to Build Trust While Keeping the Product Simple\
  Mar 5, 2026 — The goal of UX security design is to balance protection with a seamless user experience, where users feel safe without constantly ...\
  \
  \
  Eleken

- [link](https://www.linkedin.com/pulse/true-design-invisible-ux-principle-we-often-overlook-ritesh-niranjan-jonlc)\
  True Design Is Invisible: The UX Principle We Often Overlook\
  Jun 19, 2025 — Yet, in user experience (UX) design, invisibility isn't a flaw; it's often the gold standard. When a user doesn't have to think ab...\
  \
  \
  LinkedIn

Show all

## You said: by default, the browser or password manager saves username and password. then after it auto redirects autofill fails.

This is a widespread, frustrating **browser-autofill bug** caused by a conflict between modern single-page applications (like LibreChat) and password managers. \[[1](https://easycloudsolutions.com/2018/07/06/how-to-turn-off-autofill-on-chrome-and-pros-and-cons-of-autofill/), [2](https://www.makeuseof.com/tag/how-to-disable-the-autofill-feature-in-any-browser/)]

When LibreChat finishes registering you, it instantly redirects you to the dashboard. Password managers rely on a brief pause or a specific submit event to detect, save, and link credentials. Because LibreChat uses a split field system (Name/Username on signup vs. Email on login), the browser gets confused.

Here is why this autofill failure happens and how to fix it.

### Why Autofill Fails Here

- **Credential Mismatch:** On registration, the browser grabs the "Username" field to save as your primary login identifier. On the login page, LibreChat asks for your "Email." The browser tries to paste your username into the email box, causing the login to fail. \[[1](https://help.powerschool.com/t5/Community-Forum/Saving-username-and-password/m-p/474542), [2](https://community.cloudera.com/t5/Support-Questions/username-autofills-in-search-fields/td-p/269545)]
- **The Instant Redirect:** LibreChat automatically logs users in and redirects them to the main chat screen immediately after clicking "Register." Browsers often miss this quick transition and fail to trigger the "Save Password?" prompt. \[[1](https://superuser.com/questions/407046/chrome-does-not-ask-me-to-save-password-for-some-websites), [2](https://gosecure.ai/blog/2022/06/29/did-you-know-your-browsers-autofill-credentials-could-be-stolen-via-cross-site-scripting-xss/)]
- **Shadow DOM Rendering:** LibreChat is built on React. React dynamically renders forms without reloading the webpage. Traditional browser extension autofills struggle to detect these dynamic changes, meaning they do not recognize the login fields when you log back out.

### Technical Solutions (If You Own the Instance)

If you are hosting this LibreChat instance, you can fix this UX bug for your users by modifying the code or using a reverse proxy to inject better HTML attributes:

- **Fix `autocomplete` Attributes:** Ensure the registration Email field has `autocomplete="email"`, the Username field has `autocomplete="username"`, and the login Email field has `autocomplete="username"`. Browsers treat the login identifier as a "username" even if it is an email address. \[[1](https://daniel.vivaldi.net/2025/fix-android-autofill-browser/), [2](https://help.powerschool.com/t5/Community-Forum/Saving-username-and-password/m-p/474542)]
- **Add Hidden Fields:** If a form lacks an explicit email label during login, adding a hidden dummy username field can trick the browser into mapping the credentials correctly.

### User-Side Workarounds (If You Are a User)

If you are a user trying to log into someone else's LibreChat site, use these steps to force your password manager to cooperate:

1. **Manual Update:** Open your password manager (e.g., Bitwarden, 1Password, or Chrome Settings). Find the LibreChat entry, and manually change the saved "Username" value to your **Email Address**. \[[1](https://www.1password.community/discussions/1password/1password-is-not-respected-as-the-default-passkey-manager-on-android/161255), [2](https://community.bitwarden.com/t/solved-autofill-working-when-should-not/34426)]
2. **Add a Custom Field:** In advanced password managers, add a new text field named `email` or `username` and paste your email address there to force-feed it to the login form.

***

If you want to permanently resolve this for your users, let me know if you would like to:

- See the **exact HTML code modification** needed for the LibreChat login component.

- Learn how to configure a **passwordless login** option to bypass this browser bug entirely.

- [link](https://easycloudsolutions.com/2018/07/06/how-to-turn-off-autofill-on-chrome-and-pros-and-cons-of-autofill/)\
  How to Turn Off Autofill on Chrome and Pros and Cons of Autofill\
  Jul 6, 2018 — TURN OFF AUTOFILL ON CHROME While there are several autofill tools available for Chrome ( Google Chrome ) , its integrated autofil...\
  \
  Easy Cloud Solutions

- [link](https://www.makeuseof.com/tag/how-to-disable-the-autofill-feature-in-any-browser/)\
  How to Manage the Autofill Feature in Edge, Chrome, Opera, and Firefox\
  Mar 16, 2022 — Autofill can be a useful feature to have, but more often than not, it's annoying and gets in the way. Here's how to manage it on m...\
  \
  \
  MakeUseOf

- [link](https://help.powerschool.com/t5/Community-Forum/Saving-username-and-password/m-p/474542)\
  Re: Saving username and password\
  Jun 13, 2023 — What you are describing is more of a browser issue than a PowerSchool issue. Many modern browsers are set this way so that as you ...\
  \
  PowerSchool Community

Show all

## You said: what do you think from the ux perspective

From a pure User Experience (UX) perspective, <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">the combination of a split-field form and an instant redirect creates a <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">high-friction onboarding experience</strong> that breaks user trust immediately after registration</mark>.

When a system forces a user to register with one identifier (Username) but log in with another (Email), it violates fundamental UX design principles.

### The UX Failures in This Flow

- **Violates the Principle of Least Surprise:** Users expect that whatever unique identifier they create during registration will be their key to get back in. Changing the rules on the login screen forces them to think, which slows them down. \[[1](https://www.stan.vision/journal/10-common-ux-mistakes-that-frustrate-users-and-how-to-fix-them)]
- **Breaks the Mental Model of Automation:** Users heavily rely on their browsers and password managers (like Bitwarden, iCloud Keychain, or 1Password) to handle security. When the app's code breaks these tools, it makes the application feel unpolished or broken, even if the core product is great.
- **Creates Immediate Onboarding Anxiety:** Registering for a new tool should feel seamless. Getting stuck on your very first return visit because autofill pasted a username into an email field causes immediate frustration and user drop-off. \[[1](https://www.linkedin.com/pulse/importance-user-experience-design-new-product-doug-cunningham-i4y1e)]

### The Core Design Conflict

The development team chose a **system-centric design** over a **user-centric design**: \[[1](https://medium.com/@fahimulhaq/how-i-shifted-from-system-centric-to-user-centric-thinking-34bfb664aed8)]

- **The System's View:** "We need a username for the chat display name, an email for unique database records, and we will log them in instantly to save them a click."
- **The User's View:** "I just made an account, the site moved too fast for my browser to save it, and now I am locked out because it is asking for my email but my browser only remembered my username." \[[1](https://medium.com/@bossaresearch/you-are-not-the-customer-rethinking-the-user-product-in-the-digital-age-1fa481972df3)]

### How to Fix this UX Nightmare

If you are designing or modifying this flow, you can fix this friction using three standard UX patterns:

1. **Unified Login Field:** Change the login screen label to **"Email or Username"** and allow the backend to accept either. This aligns perfectly with whatever the password manager managed to capture.
2. **Delayed Success State:** Instead of an instant redirect after registration, show a clear success screen: _"Account created successfully! Click here to proceed to your dashboard."_ This small pause gives the browser's "Save Password" prompt time to trigger and accurately capture the data.
3. **Defer Username Creation:** Strip the "Username" field out of the registration form entirely. Let users sign up using just Email and Password. Once they land on the dashboard for the first time, present a friendly, one-field popup: _"What should we call you?"_ to collect their display name.

***

If you want to adjust how LibreChat handles this onboarding, let me know if you would like to:

- Look at the **React component code** for LibreChat to see where to edit these form labels.

- Learn how to implement a **"Welcome/Onboarding" step** that collects usernames _after_ login. \[[1](https://userpilot.com/blog/user-flow-examples/)]

- [link](https://www.stan.vision/journal/10-common-ux-mistakes-that-frustrate-users-and-how-to-fix-them)\
  10 Common UX Mistakes That Frustrate Users (And How to Fix Them)\
  StanVision pro tip: If the UI changes its rules from screen to screen, users will stop trusting it.\
  \
  StanVision

- [link](https://www.linkedin.com/pulse/importance-user-experience-design-new-product-doug-cunningham-i4y1e)\
  The Importance of User Experience Design in New Product Launches\
  Apr 7, 2025 — When users interact with a new product for the first time, they form instant judgments. Poor navigation, confusing layouts, or clu...\
  \
  \
  LinkedIn

- [link](https://medium.com/@fahimulhaq/how-i-shifted-from-system-centric-to-user-centric-thinking-34bfb664aed8)\
  How I shifted from system-centric to user-centric thinking\
  Sep 29, 2025 — That was the start of my shift from system-centric design, where success meant optimizing internal mechanics, to user-centric desi...\
  \
  \
  Medium

Show all

## You said: do you think it should allow both username and email to login

<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, absolutely</span></mark>. Allowing **both username and email to login** is the ultimate UX solution for this specific problem. \[[1](https://anthonychu.ca/post/aspnet-identity-20-logging-in-with-email-or-username/)]

It completely removes the friction caused by the autofill bug and aligns perfectly with modern web standards.

### Why Allowing Both is the Best UX Choice

- **It Adapts to the User (and their Tools):** Instead of forcing the user—or their password manager—to guess which field is required, the system adapts to whatever data is thrown at it. \[[1](https://registrationmagic.com/allow-wordpress-login-registration-using-email/)]
- **Total Fail-Safe for Password Managers:** If a browser incorrectly saves the username as the primary credential during registration, the login will still succeed when autofill pastes that username into the login box.
- **Accommodates Different Mental Models:** Some users naturally think of their identity on a platform by their chosen handle (username), while others always use their email address. Allowing both serves both groups seamlessly. \[[1](https://www.midnightbluetech.com/technology-basics-username/), [2](https://www.reddit.com/r/webdev/comments/1g33cmp/any%5Freason%5Ffor%5Flogging%5Fwith%5Femail%5Fvs%5Flogging%5Fwith/), [3](https://ux.stackexchange.com/questions/61815/is-there-any-advantage-of-signup-before-login-with-social-plugins), [4](https://ux.stackexchange.com/questions/20533/registration-username-and-password-or-email-and-password)]

### How it Works Behind the Scenes

From a development perspective, implementing this is incredibly simple and highly secure. The login input label changes to **"Username or Email."** \[[1](https://workos.com/blog/support-sso-password-logins), [2](https://priocept.com/2013/06/05/login-functionality-back-to-basics/), [3](https://www.outsystems.com/forums/discussion/67275/login-works-with-username-but-not-with-email-address/)]

When the user submits the form, the backend performs a quick check:

1. Does the input contain an `@` symbol?
2. If **yes**, it queries the database for that **Email**.
3. If **no**, it queries the database for that **Username**.
4. Once the record is found, it verifies the password as normal. \[[1](https://auth0.com/blog/asp-dot-net-core-authentication-tutorial/), [2](https://laracasts.com/discuss/channels/laravel/login-with-username-or-email-in-laravel), [3](https://medium.com/israeli-tech-radar/oauth-2-0-and-openid-connect-for-dummies-6fa6e995d6d5)]

### Examples in the Wild

Most major tech platforms that require a unique display name utilize this exact pattern to prevent login friction: \[[1](https://indodax.com/academy/en/username-vs-password-in-crypto/)]

- **X (formerly Twitter):** Allows Phone, Email, or Username.
- **GitHub:** Allows Username or Email.
- **Discord:** Allows Email or Phone Number (and historically Username). \[[1](https://proxidize.com/blog/x-login/), [2](https://whatmakeart.com/coding/configure-username-email-in-git-mac/), [3](https://www.dreamhost.com/blog/login-page-examples/)]

### Summary

Restricting the login to just an email address after forcing a username registration is a **system-first design**. Expanding it to accept both is a **user-first design** that eliminates the exact autofill bug you experienced.

***

If you want to implement this fix, let me know if you would like to:

- Explore the **LibreChat GitHub repository** to see if there is an active PR or setting to enable this.

- Write a **feature request template** to submit to the LibreChat developers.

- [link](https://anthonychu.ca/post/aspnet-identity-20-logging-in-with-email-or-username/)\
  ASP.NET Identity 2.0 - Logging in with Email or Username\
  Jan 22, 2014 — Allow users to log in with email or username Now that all users have an email address, we should allow them to log in by supplying...\
  \
  \
  anthonychu.ca

- [link](https://registrationmagic.com/allow-wordpress-login-registration-using-email/)\
  How to Allow WordPress Login and Registration using Email\
  Oct 5, 2018 — On the Username field's settings page, change the option for “Username field accepts” to “Username and Email”. This will allow use...\
  \
  \
  RegistrationMagic

- [link](https://www.midnightbluetech.com/technology-basics-username/)\
  Technology Basics: What are Usernames? | MidnightBlue Technology Services\
  Jul 20, 2018 — A username is generally used to log into a specific account, although some sites might simply use your email address. They are the...\
  \
  \
  www.midnightbluetech.com

Show all

## You said: do you think login and signup should be consistent, like all username, all email, or all both

From a strict UX perspective, <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">"all both" (allowing either Email or Username for both signup and login) is the superior, most robust model</strong></mark>**.** \[[1](https://ux.stackexchange.com/questions/80198/username-or-email-label-for-login-form-assuming-theyre-the-same), [2](https://forum.djangoproject.com/t/what-prevents-email-or-username-login/5364)]

However, standardizing the forms so that they match exactly is not always the best solution. Perfect symmetry between signup and login can actually introduce different UX flaws. \[[1](https://ux.stackexchange.com/questions/60331/should-i-have-both-username-and-email-for-registration-sign-up), [2](https://ux.stackexchange.com/questions/57126/should-usernames-be-unique), [3](https://ux.stackexchange.com/questions/114335/can-i-combine-login-and-signup-with-a-single-button)]

The three approaches stack up differently against the goals of modern authentication design:

***

### 1. The "All Both" Model (The Gold Standard)

- **Signup:** Requires Name, Username, Email, and Password.
- **Login:** Accepts **Username OR Email** + Password.
- **UX Verdict:** **Excellent.** This fixes the autofill redirect bug completely. If the password manager saves the username during signup, the user can still log in using that username. It accommodates every user's mental model and adapts to the quirks of browser automation. \[[1](https://danny-avila-librechat-89.mintlify.app/api/authentication), [2](https://ux.stackexchange.com/questions/80198/username-or-email-label-for-login-form-assuming-theyre-the-same), [3](https://ux.stackexchange.com/questions/60331/should-i-have-both-username-and-email-for-registration-sign-up)]

### 2. The "All Email" Model (The Hyper-Lean Flow)

- **Signup:** Requires _only_ Email and Password.
- **Login:** Requires _only_ Email and Password.
- **UX Verdict:** **Good for entry, bad for identity.** This eliminates signup friction entirely, making it incredibly fast. However, apps like LibreChat _need_ an identity token to display a name next to a chat bubble. If you use "all email," the app has to auto-generate a generic placeholder name (like `User_8492`), forcing the user to dig through settings later to fix their profile. \[[1](https://www.librechat.ai/docs/features/mcp), [2](https://uxmag.com/articles/app-login-design-choosing-the-right-user-login-option-for-your-app), [3](https://ux.stackexchange.com/questions/80198/username-or-email-label-for-login-form-assuming-theyre-the-same), [4](https://ux.stackexchange.com/questions/57126/should-usernames-be-unique), [5](https://www.loginradius.com/blog/identity/how-ui-ux-affects-registration)]

### 3. The "All Username" Model (The Legacy Flow)

- **Signup:** Requires _only_ Username and Password.
- **Login:** Requires _only_ Username and Password.
- **UX Verdict:** **Poor.** While consistent, it creates massive platform risk. If a user forgets their custom username, they are locked out permanently. Without collecting an email address up front, the system has no secure way to send a "Forgot Password" reset link. \[[1](https://ux.stackexchange.com/questions/60331/should-i-have-both-username-and-email-for-registration-sign-up), [2](https://uxmag.com/articles/app-login-design-choosing-the-right-user-login-option-for-your-app), [3](https://kothiyal-anuj.medium.com/serverless-diary-how-to-achieve-strong-consistency-with-appconfig-feature-flags-55b772ae6a47), [4](https://medium.com/@J0h3nn3/day-2-authentication-bypass-199a0cc6761a)]

***

### Summary: Symmetrical Is Not Always User-Friendly

| Model \[[1](https://devforum.okta.com/t/terminating-current-session-if-login-hint-does-not-match/11040)] | Signup Friction | Login Flexibility | Password Manager Friendly?     |
| -------------------------------------------------------------------------------------------------------- | --------------- | ----------------- | ------------------------------ |
| **All Both**                                                                                             | Medium          | **High**          | **Yes (Bulletproof)**          |
| **All Email**                                                                                            | **Low**         | Low               | Yes                            |
| **All Username**                                                                                         | Low             | Low               | No (High risk of account loss) |

The issue with LibreChat's default state isn't that the signup page asks for _too much_ information; it is that the login page is _too rigid_ to accept the data the user just created. By switching the login field to accept **"Username or Email,"** the system fixes the asymmetry without sacrificing account security or profile customization. \[[1](https://ux.stackexchange.com/questions/80198/username-or-email-label-for-login-form-assuming-theyre-the-same), [2](https://danny-avila-librechat-89.mintlify.app/api/authentication)]

***

If you are dealing with a specific application design, let me know if you would like to:

- Look at a **UX wireframe layout** for a perfect "All Both" form.

- Discuss how to handle **anonymous guest signups** that require no fields at all.

- [link](https://ux.stackexchange.com/questions/60331/should-i-have-both-username-and-email-for-registration-sign-up)\
  Should I have both username and email for registration/sign up?\
  Jun 24, 2014 — It's common practice to store both a username and email address for user registration. The username is a familiar handle that isn'\
  User Experience Stack Exchange

- [link](https://ux.stackexchange.com/questions/80198/username-or-email-label-for-login-form-assuming-theyre-the-same)\
  Username or Email label for login form, assuming they're the same?\
  Jun 15, 2015 — This is why sites (Amazon, Facebook, Pinterest, etc) which use email address as a login credential generally ask for the email add...\
  User Experience Stack Exchange

- [link](https://ux.stackexchange.com/questions/57126/should-usernames-be-unique)\
  Should usernames be unique? - User Experience Stack Exchange\
  May 12, 2014 — tl;dr; use email addresses as the login token. I recommend only allowing users to create a username if that username needs to be u...\
  User Experience Stack Exchange

Show all

## You said: i mean do you think login and signup should be consistent no matter what they choose to support or require

<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, </span><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">the internal logic and labels of both forms must be consistent</strong></mark>, even if the signup form naturally requires more fields than the login form.

When a system lacks this consistency, it creates an invisible trap for the user and their browser.

### The Immutable Rule of Form Consistency

To prevent autofill bugs and user confusion, authentication design must follow a strict rule: **The primary identifier used to log back in must be explicitly highlighted during signup.**

If an application chooses a specific requirement, the fields must align to maintain consistency:

- **If the app requires Email to log in:** The signup form _must_ make the Email field the visual star of the form. The "Username" field should be clearly labeled as an optional "Display Name" or "Chat Handle" so both the user and the password manager know it is not the main account key.
- **If the app allows Both to log in:** The login form _must_ be labeled "Username or Email." This mirrors the fact that both pieces of data were collected during signup and are equally valid keys to the account. \[[1](https://thrivethemes.com/docs/how-to-use-the-login-and-registration-form-element-in-thrive-architect/)]

### Why Inconsistency Breaks the UX

When LibreChat collects a Username at signup but rejects it at login, it breaks consistency in two major ways:

1. **Semantic Inconsistency:** The app treats the Username as a critical account identifier on page one, but treats it as useless metadata on page two.
2. **Browser Inconsistency:** Password managers look at the registration form and ask, _"What is the unique handle here?"_ They see a field explicitly called "Username" and save it. When they get to the login page, they look for a username slot, find none, and fail.

### The Ideal Consistent Framework

To ensure flawless consistency, an authentication system should always structure its fields using one of these three matched pairs: \[[1](https://medium.com/@mgpsradhika5760/smart-authentication-ux-patterns-that-improve-security-4505a482e05b)]

- **The Email Path:** Signup asks for Email → Login asks for Email.
- **The Username Path:** Signup asks for Username → Login asks for Username.
- **The Hybrid Path:** Signup asks for Username & Email → Login accepts Username or Email. \[[1](https://productled.com/blog/user-onboarding-email-best-practices), [2](https://help.schoolsbuddy.com/hc/en-gb/articles/4405334154509-Using-Single-Sign-on-SSO-to-access-SchoolsBuddy)]

Any deviation outside of these three matched pairs—like LibreChat's default behavior—is an inconsistent design pattern that leads directly to broken autofill integration and login errors.

***

If you are currently mapping out a user flow, let me know if you want to explore:

- How to write **clear placeholder text** to guide users through consistent forms.

- The specific **HTML autocomplete attributes** that tell browsers exactly how to map consistent fields.

- [link](https://thrivethemes.com/docs/how-to-use-the-login-and-registration-form-element-in-thrive-architect/)\
  How to Use the Login and Registration Form Element in Thrive Architect\
  Form Type Login — Displays only the login form with username/email and password fields (default) Register — Displays only the regi...\
  \
  \
  Thrive Themes

- [link](https://medium.com/@mgpsradhika5760/smart-authentication-ux-patterns-that-improve-security-4505a482e05b)\
  Smart Authentication UX Patterns That Improve Security | by Radhika Gupta\
  Feb 23, 2026 — In conclusion, authentication should be a structured and standardized part of any design system. It must balance simplicity, secur...\
  \
  Medium

- [link](https://productled.com/blog/user-onboarding-email-best-practices)\
  SaaS Onboarding Email Best Practices \[+ Templates & Examples] | ProductLed\
  Mar 28, 2023 — The signup is the signal for your welcome email to be sent.\
  \
  \
  Productled

Show all

## You said: what do you think from the ux perspective

From a pure UX perspective, <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">absolute consistency across both forms is <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">mandatory for a seamless experience.</strong></mark> \[[1](https://clay.global/blog/ux-guide)]

When signup and login forms disagree on what constitutes a user's identity, the system shifts its own technical database constraints onto the human user.

### Why Visual and Functional Symmetry is Essential

- **Protects the User's Mental Model:** A user forms an immediate "mental map" of their account during signup. If they type a username, they subconsciously categorize that username as their key to the app. Forcing a sudden pivot to an email address on the next screen shatters that expectation.
- **Ensures Algorithmic Predictability:** Password managers are rigid algorithms. They require structural symmetry. If the signup form screams _"Give me a username!"_ and the login form demands _"Give me an email!"_, the browser's automation engine errors out because the data inputs do not align. \[[1](https://qualaroo.com/blog/ux-mistakes/)]

### The UX Verdict on Strict Consistency

If a system chooses a path, it must commit to it entirely across both interfaces:

- **Consistent Email-First:** If the system values email login, the signup form must prioritize the email field, and the username should be relegated to an onboarding step _after_ the account is created.
- **Consistent Username-First:** If a platform wants to feel like a classic forum or gaming space, the username must remain the primary key on both screens, with email strictly acting as a background recovery tool.
- **Consistent Hybrid ("Both"):** If both pieces of data are gathered, the login screen must be flexible enough to accept either.

### Summary: The Golden Rule of UX Authentication

An interface should never require a user to memorize **how** the system stores their data just to log back in. Forms must be built symmetrically so that the path of least resistance for the user is exactly the path the system expects. Anything less is an incomplete design. \[[1](https://www.nngroup.com/articles/psychology-study-guide/), [2](https://www.aufaitux.com/blog/ux-design-psychological-principles/)]

***

If you want to dive deeper into optimizing this interaction, let me know if you would like to:

- Look at **industry examples** of apps that successfully transitioned to fully consistent forms.

- Draft a **UX design spec** that enforces form consistency for a development team. \[[1](https://www.linkedin.com/pulse/what-ux-strategy-secret-weapon-successful-products-aminul-islam-hk4wc)]

- [link](https://clay.global/blog/ux-guide)\
  The Ultimate UI/UX Design Guide for 2026 | Clay\
  Mar 26, 2024 — It is crucial to remain consistent in both UX and UI design to avoid user confusion and ensure a seamless experience.\
  \
  \
  clay.global

- [link](https://qualaroo.com/blog/ux-mistakes/)\
  30 UX Mistakes to Avoid for Better Design & Conversions (\[current\_year])\
  Jan 16, 2026 — There's no one-upping the other when it comes to the aesthetics and functionality of UX design. It requires a perfect balance of b...\
  \
  \
  Qualaroo

- [link](https://www.nngroup.com/articles/psychology-study-guide/)\
  Psychology for UX: Study Guide - NN/G\
  Apr 24, 2025 — User interfaces should not force users to memorize information; it should be provided for them to reference.\
  \
  \
  Nielsen Norman Group

Show all

# . config (d)

<!-- read offical guide instead -->

```yaml
version: 1.1.5

endpoints:
  custom:
    - name: "OpenRouter"
      apiKey: "${OPENEROUTER_API_KEY}"
      baseURL: "https://openrouter.ai"
      models:
        default: ["none"]
        fetch: true
      titleConvo: true
      titleModel: "current_model"
      summarize: true
      summaryModel: "current_model"
```

# 

<!-- what the hell. so config heavy -->

# Custom Config (https://www.librechat.ai/docs/configuration/librechat_yaml)

## What is librechat.yaml?

The `librechat.yaml` file is LibreChat's main configuration file for custom AI endpoints, model settings, interface options, and advanced features like MCP servers and agents. It is optional -- LibreChat works with sensible defaults if the file does not exist.

Follow the steps below to create the file, mount it for your deployment type, and verify it works.

<Callout type="info" title="If you only remember one thing">

For Docker installs, editing `librechat.yaml` is not enough. The file must exist in the project root, be mounted into the API container, and LibreChat must be restarted before changes appear in the UI.

</Callout>

## Setup

<Steps>
  <Step>

### Locate or Create the File

Create a new `librechat.yaml` in your project root (the same directory as your `.env` file):

```bash
touch librechat.yaml
```

You can also copy the [example config](/docs/configuration/librechat_yaml/example) as a starting point:

```bash
cp librechat.example.yaml librechat.yaml
```

<Callout type="info" title="Alternative File Path">

You can set a custom file path using the `CONFIG_PATH` environment variable:

```bash filename=".env"
CONFIG_PATH="/alternative/path/to/librechat.yaml"
```

</Callout>

  </Step>
  <Step>

### Mount the Config File

<Tabs items={['Docker', 'Local']}>
  <Tabs.Tab>

Docker needs a volume mount to access your `librechat.yaml` file inside the container.

**Copy the example override file:**

```bash
cp docker-compose.override.yml.example docker-compose.override.yml
```

**Edit `docker-compose.override.yml`** and ensure the librechat.yaml volume mount is uncommented:

```yaml filename="docker-compose.override.yml"
services:
  api:
    volumes:
      - type: bind
        source: ./librechat.yaml
        target: /app/librechat.yaml
```

This uses the [docker-compose.override.yml](/docs/configuration/docker_override) pattern -- Docker Compose automatically merges it with the main `docker-compose.yml`, so your customizations survive updates.

  </Tabs.Tab>
  <Tabs.Tab>

Place `librechat.yaml` in the project root directory (the same directory as your `.env` file). No additional mounting is needed for local installations.

  </Tabs.Tab>
</Tabs>

  </Step>
  <Step>

### Restart LibreChat

<Tabs items={['Docker', 'Local']}>
  <Tabs.Tab>

```bash
docker compose down && docker compose up -d
```

  </Tabs.Tab>
  <Tabs.Tab>

Stop the running process (Ctrl+C) and restart:

```bash
npm run backend
```

  </Tabs.Tab>
</Tabs>

  </Step>
  <Step>

### Verify It Works

Open LibreChat in your browser. If your configuration includes custom endpoints, you should see them in the model selector dropdown.

If the server fails to start, check the logs for validation errors:

```bash
docker compose logs api
```

  </Step>
</Steps>

## Example: Adding OpenRouter

This example walks through adding [OpenRouter](https://openrouter.ai/) as a custom endpoint -- one of the most popular configurations.

**1. Get an API key** from [openrouter.ai/keys](https://openrouter.ai/keys).

**2. Add the key to your `.env` file:**

```bash filename=".env"
OPENROUTER_KEY=sk-or-v1-your-key-here
```

<Callout type="warning" title="Environment Variable Name">

Use `OPENROUTER_KEY`, not `OPENROUTER_API_KEY`. Using `OPENROUTER_API_KEY` will override the OpenAI endpoint to use OpenRouter as well.

</Callout>

**3. Add the endpoint to `librechat.yaml`:**

```yaml filename="librechat.yaml"
version: 1.3.5
cache: true
endpoints:
  custom:
    - name: "OpenRouter"
      apiKey: "${OPENROUTER_KEY}"
      baseURL: "https://openrouter.ai/api/v1"
      models:
        default: ["meta-llama/llama-3-70b-instruct"]
        fetch: true
      titleConvo: true
      titleModel: "meta-llama/llama-3-70b-instruct"
      dropParams: ["stop"]
      modelDisplayLabel: "OpenRouter"
```

**4. Restart LibreChat** (see restart commands above) and select OpenRouter from the model selector.

For the full annotated config file with more endpoint examples, see the [example configuration](/docs/configuration/librechat_yaml/example).

## Reference

For detailed field-level documentation, see the reference pages below.

<Cards num={2}>
  <Cards.Card title="AI Endpoints" href="/docs/configuration/librechat_yaml/ai_endpoints" arrow>
    Compatible AI providers and example endpoint configurations
  </Cards.Card>
  <Cards.Card title="Object Structure" href="/docs/configuration/librechat_yaml/object_structure" arrow>
    Complete field reference for every librechat.yaml option
  </Cards.Card>
</Cards>

## Troubleshooting

### Change Does Not Show in LibreChat

If you edited `librechat.yaml` and nothing changed in the UI:

1. Confirm the file is in the LibreChat project root unless you set `CONFIG_PATH`.
2. For Docker, confirm the file is mounted in `docker-compose.override.yml`.
3. Restart LibreChat with `docker compose down && docker compose up -d`.
4. Check the API logs with `docker compose logs api`.
5. Validate the file with the [YAML Validator](/toolkit/yaml_checker).

Custom endpoints such as OpenRouter only appear after all three pieces are correct: `.env` contains the key, `librechat.yaml` defines the endpoint, and Docker can read the mounted config file.

### Configuration Validation

<Callout type="error" title="Configuration Validation">

LibreChat exits with an error (exit code 1) if `librechat.yaml` contains validation errors. This fail-fast behavior catches configuration issues early.

To validate your YAML syntax before restarting, use the [YAML Validator](/toolkit/yaml_checker) or [yamlchecker.com](https://yamlchecker.com/).

</Callout>

### Server Exits Immediately on Startup

If your server exits immediately after starting, this is likely a configuration validation error.

**To diagnose:**

1. Check server logs: `docker compose logs api`
2. Validate your YAML syntax with the [YAML Validator](/toolkit/yaml_checker)
3. Common errors: incorrect indentation, missing colons, unknown keys, invalid values

**Temporary workaround** (not recommended for production):

```bash filename=".env"
CONFIG_BYPASS_VALIDATION=true
```

<Callout type="warning" title="Warning">

`CONFIG_BYPASS_VALIDATION=true` causes the server to skip validation and use default configuration. Always fix the validation errors instead.

</Callout>

# . setup

```sh
 ~ % cd Documents/.storage
 ~/Documents/.storage % cd librechat
 ~/Documents/.storage/librechat
 % open .
 ~/Documents/.storage/librechat
 % touch librechat.yaml
 ~/Documents/.storage/librechat
 % open librechat.yaml
 ~/Documents/.storage/librechat
 % docker compose down && docker compose up -d

WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
[+] down 6/6
 ✔ Container LibreChat        Removed                                                                                             0.6s
 ✔ Container chat-meilisearch Removed                                                                                             0.4s
 ✔ Container chat-mongodb     Removed                                                                                             0.2s
 ✔ Container rag_api          Removed                                                                                             2.1s
 ✔ Container vectordb         Removed                                                                                             0.2s
 ✔ Network librechat_default  Removed                                                                                             0.1s
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
[+] up 6/6
 ✔ Network librechat_default  Created                                                                                             0.0s
 ✔ Container vectordb         Started                                                                                             0.3s
 ✔ Container chat-mongodb     Started                                                                                             0.3s
 ✔ Container chat-meilisearch Started                                                                                             0.3s
 ✔ Container rag_api          Started                                                                                             0.4s
 ✔ Container LibreChat        Started                                                                                             0.5s
 ~/Documents/.storage/librechat
 % docker compose down && docker compose up -d

WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
[+] down 6/6
 ✔ Container LibreChat        Removed                                                                                             0.3s
 ✔ Container chat-meilisearch Removed                                                                                             0.1s
 ✔ Container rag_api          Removed                                                                                             0.7s
 ✔ Container chat-mongodb     Removed                                                                                             0.1s
 ✔ Container vectordb         Removed                                                                                             0.1s
 ✔ Network librechat_default  Removed                                                                                             0.1s
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
[+] up 6/6
 ✔ Network librechat_default  Created                                                                                             0.0s
 ✔ Container chat-mongodb     Started                                                                                             0.3s
 ✔ Container chat-meilisearch Started                                                                                             0.2s
 ✔ Container vectordb         Started                                                                                             0.3s
 ✔ Container rag_api          Started                                                                                             0.3s
 ✔ Container LibreChat        Started                                                                                             0.4s
 ~/Documents/.storage/librechat
 % docker compose down && docker compose up -d

WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
[+] down 6/6
 ✔ Container chat-meilisearch Removed                                                                                             0.1s
 ✔ Container LibreChat        Removed                                                                                             0.3s
 ✔ Container rag_api          Removed                                                                                             0.7s
 ✔ Container chat-mongodb     Removed                                                                                             0.1s
 ✔ Container vectordb         Removed                                                                                             0.1s
 ✔ Network librechat_default  Removed                                                                                             0.1s
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
[+] up 6/6
 ✔ Network librechat_default  Created                                                                                             0.0s
 ✔ Container vectordb         Started                                                                                             0.3s
 ✔ Container chat-meilisearch Started                                                                                             0.3s
 ✔ Container chat-mongodb     Started                                                                                             0.3s
 ✔ Container rag_api          Started                                                                                             0.3s
 ✔ Container LibreChat        Started                                                                                             0.4s
 ~/Documents/.storage/librechat
 % docker compose down && docker compose up -d

WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
[+] down 6/6
 ✔ Container chat-meilisearch Removed                                                                                             0.2s
 ✔ Container LibreChat        Removed                                                                                             0.3s
 ✔ Container chat-mongodb     Removed                                                                                             0.1s
 ✔ Container rag_api          Removed                                                                                             0.8s
 ✔ Container vectordb         Removed                                                                                             0.1s
 ✔ Network librechat_default  Removed                                                                                             0.1s
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
[+] up 6/6
 ✔ Network librechat_default  Created                                                                                             0.0s
 ✔ Container vectordb         Started                                                                                             0.3s
 ✔ Container chat-mongodb     Started                                                                                             0.3s
 ✔ Container chat-meilisearch Started                                                                                             0.2s
 ✔ Container rag_api          Started                                                                                             0.3s
 ✔ Container LibreChat        Started                                                                                             0.4s
 ~/Documents/.storage/librechat
 % docker compose down && docker compose up -d

WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
[+] down 6/6
 ✔ Container chat-meilisearch Removed                                                                                             0.1s
 ✔ Container LibreChat        Removed                                                                                             0.3s
 ✔ Container chat-mongodb     Removed                                                                                             0.1s
 ✔ Container rag_api          Removed                                                                                             0.7s
 ✔ Container vectordb         Removed                                                                                             0.1s
 ✔ Network librechat_default  Removed                                                                                             0.1s
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
[+] up 6/6
 ✔ Network librechat_default  Created                                                                                             0.0s
 ✔ Container chat-mongodb     Started                                                                                             0.3s
 ✔ Container vectordb         Started                                                                                             0.3s
 ✔ Container chat-meilisearch Started                                                                                             0.3s
 ✔ Container rag_api          Started                                                                                             0.3s
 ✔ Container LibreChat        Started                                                                                             0.4s
 ~/Documents/.storage/librechat
 % docker compose down && docker compose up -d

WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
[+] down 6/6
 ✔ Container LibreChat        Removed                                                                                             0.3s
 ✔ Container chat-meilisearch Removed                                                                                             0.1s
 ✔ Container chat-mongodb     Removed                                                                                             0.1s
 ✔ Container rag_api          Removed                                                                                             0.7s
 ✔ Container vectordb         Removed                                                                                             0.1s
 ✔ Network librechat_default  Removed                                                                                             0.1s
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
[+] up 6/6
 ✔ Network librechat_default  Created                                                                                             0.0s
 ✔ Container chat-meilisearch Started                                                                                             0.3s
 ✔ Container vectordb         Started                                                                                             0.2s
 ✔ Container chat-mongodb     Started                                                                                             0.3s
 ✔ Container rag_api          Started                                                                                             0.3s
 ✔ Container LibreChat        Started                                                                                             0.4s
 ~/Documents/.storage/librechat
 % cp docker-compose.override.yml.example docker-compose.override.yml
 ~/Documents/.storage/librechat
 % open docker-compose.override.yml
 ~/Documents/.storage/librechat
 % open docker-compose.override.yml
 ~/Documents/.storage/librechat
 % docker compose down && docker compose up -d

WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
[+] down 6/6
 ✔ Container LibreChat        Removed                                                                                             0.3s
 ✔ Container chat-meilisearch Removed                                                                                             0.1s
 ✔ Container chat-mongodb     Removed                                                                                             0.1s
 ✔ Container rag_api          Removed                                                                                             0.7s
 ✔ Container vectordb         Removed                                                                                             0.1s
 ✔ Network librechat_default  Removed                                                                                             0.1s
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
[+] up 6/6
 ✔ Network librechat_default  Created                                                                                             0.0s
 ✔ Container chat-mongodb     Started                                                                                             0.3s
 ✔ Container chat-meilisearch Started                                                                                             0.3s
 ✔ Container vectordb         Started                                                                                             0.3s
 ✔ Container rag_api          Started                                                                                             0.3s
 ✔ Container LibreChat        Started                                                                                             0.4s
```

# how to setup librechat

6:39 AM

To set up **LibreChat** locally, the recommended and fastest method is <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">using <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Docker Desktop</strong></mark>. This approach configures LibreChat along with its required database (MongoDB) and search engine (Meilisearch) in under five minutes. \[[1](https://www.librechat.ai/docs/quick%5Fstart/local%5Fsetup), [2](https://www.youtube.com/watch?v=naUHHqpyOo4\&t=3), [3](https://www.librechat.ai/docs)]

### Prerequisites

Before starting, ensure you have the following software installed on your computer: \[[1](https://www.tecmint.com/librechat-linux/)]

- Docker Desktop (Keep it running in the background)
- Git \[[1](https://www.librechat.ai/docs/quick%5Fstart/local%5Fsetup), [2](https://www.youtube.com/watch?v=naUHHqpyOo4\&t=3)]

***

### Step-by-Step Installation

### 1. Clone the Repository \[[1](https://www.librechat.ai/docs/quick%5Fstart)]

Open your terminal (macOS/Linux) or Command Prompt/PowerShell (Windows) and download the LibreChat source code: \[[1](https://github.com/fuegovic/Libre-Chat/blob/main/docs/install/mac%5Finstall.md), [2](https://www.librechat.ai/docs/quick%5Fstart/local%5Fsetup), [3](https://www.youtube.com/watch?v=naUHHqpyOo4\&t=3)]

bash

```
git clone https://github.com/danny-avila/LibreChat.git
cd LibreChat
```

Use code with caution.

### 2. Create the Configuration File

LibreChat uses an environment file (`.env`) to securely handle credentials and endpoints. Duplicate the provided template: \[[1](https://www.librechat.ai/docs/configuration/dotenv), [2](https://www.librechat.ai/docs/development/get%5Fstarted), [3](https://www.librechat.ai/docs/quick%5Fstart), [4](https://www.librechat.ai/docs/remote/huggingface), [5](https://www.librechat.ai/docs/quick%5Fstart/local%5Fsetup)]

- **Linux/macOS:**\
  bash

<!---->

```
cp .env.example .env
```

Use code with caution.

- **Windows (PowerShell):**\
  powershell

<!---->

```
cp .env.example .env
```

Use code with caution.

### 3. Add Your API Keys \[[1](https://generativeai.pub/building-an-agentic-ai-workforce-with-librechat-220244b215d3)]

Open the newly created `.env` file in any text editor (like VS Code or Notepad). Find the sections for the AI providers you want to use and add your keys: \[[1](https://www.youtube.com/watch?v=7pBmvksRHv8\&t=16), [2](https://laimis.medium.com/running-librechat-and-staying-current-with-new-ai-models-49b40e7879dd), [3](https://www.librechat.ai/docs/development/get%5Fstarted)]

env

```
OPENAI_API_KEY=your_actual_openai_api_key_here
ANTHROPIC_API_KEY=your_actual_anthropic_api_key_here
```

Use code with caution.

_(You can also configure local models like Ollama or other endpoints later inside this file)._ \[[1](https://www.youtube.com/watch?v=d9ZV3-YkX-8\&t=54), [2](https://www.librechat.ai/docs)]

### 4. Launch the App

Run the following Docker command from your `LibreChat` directory to download the images and spin up the containers: \[[1](https://laimis.medium.com/running-librechat-and-staying-current-with-new-ai-models-49b40e7879dd), [2](https://www.librechat.ai/docs/quick%5Fstart/local%5Fsetup), [3](https://www.youtube.com/watch?v=7pBmvksRHv8\&t=16)]

bash

```
docker compose up -d
```

Use code with caution.

_Note: The initial setup will take a few minutes to download the required components. Subsequent startups will take seconds._ \[[1](https://www.youtube.com/watch?v=naUHHqpyOo4\&t=3)]

### 5. Create Your Account

1. Open your web browser and navigate to `http://localhost:3080`.
2. Click **Sign Up** or **Register**.
3. The **very first account** created on your local setup automatically receives Admin privileges. \[[1](https://www.librechat.ai/docs/local/docker), [2](https://www.youtube.com/watch?v=naUHHqpyOo4\&t=3)]

***

### Basic Management Commands

Run these commands from inside your `LibreChat` project folder:

- **Stop the application:** `docker compose down`
- **Restart after updating `.env`:** `docker compose down && docker compose up -d`
- **View error logs:** `docker compose logs api` \[[1](https://www.librechat.ai/docs/configuration), [2](https://www.librechat.ai/docs/configuration/librechat%5Fyaml), [3](https://laimis.medium.com/running-librechat-and-staying-current-with-new-ai-models-49b40e7879dd)]

If you prefer following a visual, over-the-shoulder walkthrough of the local installation process, check out this guide:

9m

[Install LibreChat LocallyFahd MirzaYouTube · May 10, 2024](https://www.youtube.com/watch?v=7pBmvksRHv8\&t=16)

If you want to customize your setup further, let me know if you would like to **integrate local models (like Ollama)**, set up **custom UI branding**, or deploy LibreChat to a **remote cloud server**.

- [link](https://www.librechat.ai/docs/quick%5Fstart/local%5Fsetup)\
  Local Setup Guide - LibreChat\
  Step 1. Download the Project. Manual Download. Go to the Project Page: Visit https://github.com/danny-avila/LibreChat. Download th...\
  LibreChat
- [link](https://www.librechat.ai/docs/quick%5Fstart)\
  Quick Start - LibreChat\
  1Clone the repository. 2Copy .env.example to .env. 3Run docker compose up.\
  LibreChat
- [link](https://www.youtube.com/watch?v=7pBmvksRHv8\&t=16)\
  Install LibreChat Locally\
  This video will demonstrate how to install LibreChat locally and integrate it with an OpenAI API key. While LibreChat aims to offe...\
  9m\
  YouTube·Fahd Mirza

Show all

## You said: how to setup my models from openrouter

6:40 AM

To set up OpenRouter models in LibreChat, you need to add your API key and configure the model list in your files. \[[1](https://openrouter.ai/works-with-openrouter/librechat), [2](https://simplelocalize.io/blog/posts/introducing-openrouter/)]

### 1. Add Your OpenRouter API Key \[[1](https://github.com/centminmod/nextjs-chatgpt-app/blob/main/docs/config-openrouter.md)]

Open your `.env` file located in the main `LibreChat` directory. Add your OpenRouter API key to the bottom of the file:

env

```
OPENEROUTER_API_KEY=your_openrouter_api_key_here
```

Use code with caution.

### 2. Configure the Custom Endpoint \[[1](https://github.com/microsoft/vscode/issues/319968)]

LibreChat requires a `librechat.yaml` file to safely pull and map third-party endpoints.

1. Check your main `LibreChat` directory for a file named `librechat.yaml`. If it does not exist, create it.
2. Open `librechat.yaml` in a text editor and add the following configuration:

yaml

```
version: 1.1.5

endpoints:
  custom:
    - name: "OpenRouter"
      apiKey: "${OPENEROUTER_API_KEY}"
      baseURL: "https://openrouter.ai"
      models:
        default: ["meta-llama/llama-3-70b-instruct", "mistralai/mixtral-8x7b-instruct"]
        fetch: true
      titleConvo: true
      titleModel: "meta-llama/llama-3-70b-instruct"
      summarize: true
      summaryModel: "meta-llama/llama-3-70b-instruct"
```

Use code with caution.

### 3. Update Your `.env` to Read the YAML File

For LibreChat to read your new configuration file, ensure this line is active in your `.env` file:

env

```
CONFIG_PATH=librechat.yaml
```

Use code with caution.

### 4. Restart LibreChat

Apply the new settings by restarting your Docker containers. Run these commands in your terminal:

bash

```
docker compose down
docker compose up -d
```

Use code with caution.

### How the Setup Works

- **Automatic Fetching**: Setting `fetch: true` allows LibreChat to automatically pull your available OpenRouter models.
- **Model Formats**: When choosing models in the UI dropdown, they will appear exactly as they are named on OpenRouter (e.g., `openai/gpt-4o` or `anthropic/claude-3-opus`). \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/ai%5Fendpoints/openrouter), [2](https://www.typingmind.com/guide/openrouter/magnum-v4-72b)]

Would you like to know how to **hide specific models** you do not use, or do you need help **setting up spend limits** for your users?

- [link](https://openrouter.ai/works-with-openrouter/librechat)\
  LibreChat with OpenRouter\
  Getting Started with OpenRouter for LibreChat Create an account at openrouter.ai Add credits and generate an API key at openrouter...\
  \
  \
  OpenRouter
- [link](https://simplelocalize.io/blog/posts/introducing-openrouter/)\
  Introducing: OpenRouter for auto-translation\
  Configuration Enter API Key: Input your OpenRouter API key to establish the connection. Select Models: Enter the AI model you want...\
  \
  \
  SimpleLocalize
- [link](https://github.com/centminmod/nextjs-chatgpt-app/blob/main/docs/config-openrouter.md)\
  nextjs-chatgpt-app/docs/config-openrouter.md at main · centminmod/nextjs-chatgpt-app\
  2\. Integrating OpenRouter with big-AGI Add a Vendor, and select OpenRouter. Input the API key into the OpenRouter API Key field, a...\
  \
  \
  GitHub

Show all

## You said: can it hot load

12:45 PM

No, LibreChat **cannot hot load** configuration changes out of the box. Whenever you edit `librechat.yaml` or your `.env` file, you must restart the backend for the changes to take effect. \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml), [2](https://www.librechat.ai/docs/configuration), [3](https://github.com/danny-avila/LibreChat/issues/4674)]

### The Quickest Way to Restart

To apply your OpenRouter changes with minimal downtime, run this command in your project folder: \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml), [2](https://www.librechat.ai/docs/configuration)]

bash

```
docker compose down && docker compose up -d
```

Use code with caution.

Your local chat history and user accounts are safely stored in a persistent MongoDB volume, so **you will not lose any data** by restarting. \[[1](https://github.com/Fritsl/LibreChatConfigurator), [2](https://laimis.medium.com/running-librechat-and-staying-current-with-new-ai-models-49b40e7879dd)]

### Important Redis Gotcha ⚠️

If you have **Redis caching enabled** (`USE_REDIS=true` in your `.env`), LibreChat permanently caches the `librechat.yaml` configuration. \[[1](https://github.com/danny-avila/LibreChat/discussions/11176)]

If Redis is active, a standard container restart will _not_ pull in your new OpenRouter models. You must clear the Redis cache manually using this command: \[[1](https://github.com/danny-avila/LibreChat/discussions/11176)]

bash

```
docker exec -it <your-redis-container-name> redis-cli FLUSHALL
```

Use code with caution.

### Hot Reload for Code Developers Only

If you are modifying the actual source code of LibreChat rather than just settings, you can run it in development mode for live interface reloading using `npm run frontend-dev`. However, this is for code debugging and is not meant for standard model setups. \[[1](https://github.com/danny-avila/LibreChat/discussions/475), [2](https://github.com/dotnet/maui/wiki/Diagnosing-Hot-Reload)]

Would you like help checking your **Docker container names** to ensure your restart command runs smoothly?

- [link](https://github.com/danny-avila/LibreChat/discussions/475)\
  Developing on docker with live reload · danny-avila LibreChat ...\
  The best way to is to install locally, which will depend on your environment but in general it goes like this, provided you have e...\
  GitHub
- [link](https://www.librechat.ai/docs/configuration/librechat%5Fyaml)\
  Custom Config - LibreChat\
  Confirm the file is in the LibreChat project root unless you set CONFIG\_PATH . For Docker, confirm the file is mounted in docker-c...\
  LibreChat
- [link](https://www.librechat.ai/docs/configuration)\
  Overview | LibreChat\
  Applying Changes. Restart Required. After editing any configuration file, you must restart LibreChat for changes to take effect. D...\
  LibreChat

Show all

## You said: can i omit the model list

No, you **cannot entirely omit** the `models` block, but <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">you <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">can omit individual model names</strong></mark>. \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/ai%5Fendpoints/openrouter), [2](https://github.com/danny-avila/LibreChat/blob/main/librechat.example.yaml), [3](https://www.reddit.com/r/Porsche/comments/157tmey/porsche%5Fturbo%5Fis%5Fit%5Fa%5Fthing%5Fto%5Fremove%5Fthe%5Fmodel/)]

The [LibreChat configuration schema](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/object%5Fstructure/custom%5Fendpoint) strictly requires the `models.default` array to have at least one valid fallback string. If you remove the `models:` lines entirely, the backend server will throw a validation error during boot and crash. \[[1](https://github.com/danny-avila/LibreChat/blob/main/librechat.example.yaml), [2](https://github.com/danny-avila/LibreChat/issues/10496)]

Instead of writing out OpenRouter's massive catalog of hundreds of models, use a **minimalist placeholder config**: \[[1](https://github.com/danny-avila/LibreChat/issues/1028)]

yaml

```
version: 1.1.5

endpoints:
  custom:
    - name: "OpenRouter"
      apiKey: "${OPENEROUTER_API_KEY}"
      baseURL: "https://openrouter.ai"
      models:
        default: ["openrouter/auto"] # Only include one fallback model
        fetch: true                 # This pulls the entire list automatically
      titleConvo: true
      titleModel: "openrouter/auto"
```

Use code with caution.

### Why this works:

- **The Fallback**: `openrouter/auto` serves as a safe placeholder to satisfy LibreChat's startup logic.
- **The Dynamic Fetch**: Because `fetch: true` is enabled, LibreChat immediately calls OpenRouter's `/v1/models` endpoint right after booting. It bypasses your short list and populates your UI dropdown with every available model. \[[1](https://github.com/danny-avila/LibreChat/blob/main/librechat.example.yaml), [2](https://github.com/danny-avila/LibreChat/issues/12894), [3](https://github.com/danny-avila/LibreChat/issues/1028)]

Are you hoping to **limit which models your users can see** from OpenRouter, or would you like to know how to change the **default model** that opens up for new chats?

- [link](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/ai%5Fendpoints/openrouter)\
  OpenRouter - LibreChat\
  Instead of fetching all models, you can specify a fixed list: models: default: \["anthropic/claude-3.5-sonnet", "openai/gpt-4o", "m...\
  LibreChat
- [link](https://github.com/danny-avila/LibreChat/blob/main/librechat.example.yaml)\
  librechat.example.yaml - GitHub\
  baseURL: 'https://api.mistral.ai/v1'. # Models configuration. models: # List of default models to use. At least one value is requi...\
  GitHub
- [link](https://github.com/danny-avila/LibreChat/issues/12894)\
  Fetch:true doesn't work as expected when user\_provided apiKey is ...\
  Apr 30, 2026 — Actual Behavior \* /v1/models returns a valid list of models. \* LibreChat UI does not display or update the model list. \* In some c...\
  GitHub

Show all

## You said: is openrouter/auto a real model

<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><code dir="ltr" style="font-family: monospace; font-size: 14px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">openrouter/auto</code> is a real, valid model ID</strong></mark>, but it is not a standalone large language model. \[[1](https://sidsaladi.substack.com/p/openrouter-101-the-complete-guide), [2](https://github.com/openclaw/openclaw/issues/5395), [3](https://medium.com/@milesk%5F33/a-practical-guide-to-openrouter-unified-llm-apis-model-routing-and-real-world-use-d3c4c07ed170), [4](https://github.com/openclaw/openclaw/issues/2373)]

Instead, it is OpenRouter's **dynamic Auto Router feature** packaged inside a single model slug. \[[1](https://openrouter.ai/docs/guides/routing/routers/auto-router), [2](https://openrouter.ai/openrouter/auto)]

### How it Works

When you send a message to `openrouter/auto`, OpenRouter does not process the text itself. Instead, a specialized meta-model quickly analyzes your prompt's complexity and requirements. It then routes your request on the fly to the best suited model (such as a Claude, GPT, Gemini, or DeepSeek variant). \[[1](https://openrouter.ai/openrouter/auto), [2](https://aicollab.app/blog/openrouter-auto/), [3](https://www.linkedin.com/posts/keanankoppenhaver%5Fi-just-showcased-openrouters-auto-model-activity-7308149884698693632-KaDU)]

### Pros and Cons of Using It

While it is an easy way to bypass writing a rigid list in your LibreChat configuration, consider how it impacts daily use: \[[1](https://openrouter.ai/blog/tutorials/hermes-agent/)]

- **The Pro (Convenience)**: Simple prompts get sent to cheap or free models automatically, while hard math or coding prompts get routed to smarter premium models. You only pay the base rate of whichever model it chooses. \[[1](https://www.linkedin.com/posts/keanankoppenhaver%5Fi-just-showcased-openrouters-auto-model-activity-7308149884698693632-KaDU), [2](https://sidsaladi.substack.com/p/openrouter-101-the-complete-guide), [3](https://aicollab.app/blog/openrouter-auto/)]
- **The Con (Cost Traps)**: Because the selection is automated, you lose exact control. A complex or lengthy prompt might prompt the router to select a highly expensive frontier model when a cheaper model would have sufficed, leading to unexpected credit usage. \[[1](https://www.reddit.com/r/AskClaw/comments/1t4h505/openrouter%5Fautomode%5Fis%5Fa%5Ftrap%5Fit%5Fpicks%5Fopus%5Fwhen/), [2](https://www.linkedin.com/posts/keanankoppenhaver%5Fi-just-showcased-openrouters-auto-model-activity-7308149884698693632-KaDU)]

If you prefer explicit control over your wallet, you can swap `openrouter/auto` out for a fixed, highly capable fallback model ID like `meta-llama/llama-3-70b-instruct` or `google/gemini-flash-1.5` in your `librechat.yaml` file. \[[1](https://www.linkedin.com/posts/keanankoppenhaver%5Fi-just-showcased-openrouters-auto-model-activity-7308149884698693632-KaDU)]

Would you like to know how to **filter your OpenRouter list** so that LibreChat only displays completely **free models** to your users? \[[1](https://www.youtube.com/watch?v=VZuVX9nrLaM\&t=14)]

- [link](https://openrouter.ai/docs/guides/routing/routers/auto-router)\
  Auto Router | Smart AI Model Selection | Documentation\
  The Auto Router ( openrouter/auto ) automatically selects the best model for your prompt, powered by NotDiamond . Overview. Instea...\
  OpenRouter
- [link](https://openrouter.ai/openrouter/auto)\
  Auto Router - API Pricing & Providers - OpenRouter\
  openrouter/auto. Compare Playground. Your prompt will be processed by a meta-model and routed to one of dozens of models (see belo...\
  OpenRouter
- [link](https://www.linkedin.com/posts/keanankoppenhaver%5Fi-just-showcased-openrouters-auto-model-activity-7308149884698693632-KaDU)\
  I just showcased OpenRouter's auto-model selection feature during Retool's "Model Mix and Match" webinar, and it's a perfect example of how AI is getting smarter about using AI efficiently. I asked… | Keanan Koppenhaver\
  Mar 19, 2025 — OpenRouter's auto-model selection feature uses AI to automatically pick models for you. This can save you money by using cheaper m...\
  LinkedIn

Show all

## You said: can it be a non existent model

Yes, **it can absolutely be a completely non-existent model name**, provided that you keep `fetch: true` enabled. \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/ai%5Fendpoints/openrouter), [2](https://agentgateway.dev/docs/standalone/latest/integrations/web-uis/librechat/)]

You could type `["make-believe-model"]` into the `models.default` array, and LibreChat will still boot up perfectly fine. \[[1](https://github.com/danny-avila/LibreChat/issues/10847)]

### How LibreChat Handles Fake Models

1. **Boot Phase**: LibreChat checks the `librechat.yaml` file to ensure the structure is correct. Because it sees a string inside an array, it passes the format validation check and starts up successfully. \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml), [2](https://github.com/danny-avila/LibreChat/issues/10496)]
2. **API Fetch Phase**: Because `fetch: true` is enabled, LibreChat instantly queries OpenRouter's real server to pull the actual model list. \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/ai%5Fendpoints/openrouter)]
3. **UI Display**: The application completely overwrites your fake placeholder text with the actual, active model catalog sent over by OpenRouter. Your fake model will never even show up in the dropdown menu.

### One Small Warning ⚠️

While the placeholder text can be entirely made up, you must make sure it is **not** referenced by your other title settings. If you use a fake name, update the rest of your block to use the `"current_model"` tag so it doesn't crash trying to generate chat titles: \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/object%5Fstructure/shared%5Fendpoint%5Fsettings)]

yaml

```
      models:
        default: ["fake-model-name-here"]
        fetch: true
      titleConvo: true
      titleModel: "current_model"    # Dynamically uses whatever real model you chat with
      summarize: true
      summaryModel: "current_model"  # Dynamically uses whatever real model you chat with
```

Use code with caution.

Would you like to know how to set up **system prompts (instructions)** that automatically apply to every OpenRouter model you use?

- [link](https://www.librechat.ai/docs/configuration/librechat%5Fyaml)\
  Custom Config - LibreChat\
  Confirm the file is in the LibreChat project root unless you set CONFIG\_PATH . For Docker, confirm the file is mounted in docker-c...\
  LibreChat
- [link](https://github.com/danny-avila/LibreChat/issues/10847)\
  \[Bug]: Endpoint should allow empty default models list #10847\
  Dec 8, 2025 — What happened? Following the discussion #10627 regarding having a fully aliased models name. When defining an empty default model ...\
  GitHub
- [link](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/ai%5Fendpoints/openrouter)\
  OpenRouter - LibreChat\
  Table\_title: Add the Endpoint to librechat. yaml Table\_content: | Field | Purpose | | --- | --- | | apiKey: "${OPENROUTER\_KEY}" | ...\
  LibreChat

Show all

## You said: give me the config

Here is the complete, production-ready `librechat.yaml` configuration using a fake model placeholder safely paired with dynamic title generation.

yaml

```
version: 1.1.5

endpoints:
  custom:
    - name: "OpenRouter"
      apiKey: "${OPENEROUTER_API_KEY}"
      baseURL: "https://openrouter.ai"
      models:
        default: ["placeholder-model-name"]
        fetch: true
      titleConvo: true
      titleModel: "current_model"
      summarize: true
      summaryModel: "current_model"
```

Use code with caution.

### Setup Reminder

Ensure your `.env` file contains these matching lines to supply the API key and read this file:

env

```
OPENEROUTER_API_KEY=your_actual_openrouter_key_here
CONFIG_PATH=librechat.yaml
```

Use code with caution.

Would you like to know how to add **custom icons** for OpenRouter in the UI, or do you need the exact **Docker restart command** to apply this configuration?

## You said: will it work

\*\***Yes, it will work perfectly.**

LibreChat explicitly supports setting `titleModel: "current_model"` and `summaryModel: "current_model"` for custom endpoints. This configuration successfully passes structural validation at boot phase, triggers the external API fetch, and avoids crashing when generating conversation titles. \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/object%5Fstructure/custom%5Fendpoint), [2](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/object%5Fstructure/shared%5Fendpoint%5Fsettings), [3](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/ai%5Fendpoints/vllm)]

### Verify It is Working properly

Once you save the file and run `docker compose down && docker compose up -d`, check for these visual signs in the UI: \[[1](https://www.librechat.ai/docs/quick%5Fstart/custom%5Fendpoints)]

1. **The Selector:** Click the model dropdown in the top-left corner. You should see "OpenRouter" listed as an endpoint. \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/ai%5Fendpoints/openrouter)]
2. **The Catalog:** Open the list of models under OpenRouter. If you see dozens of real models (like `meta-llama/...`, `google/...`, or `anthropic/...`) instead of your fake placeholder, the dynamic fetch succeeded. \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/object%5Fstructure/shared%5Fendpoint%5Fsettings), [2](https://openrouter.ai/works-with-openrouter/librechat)]
3. **The Chats:** Start a new chat session. After your first message and the AI's response, the sidebar title should change from _"New Chat"_ to a summarized title relevant to your topic. \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/object%5Fstructure/custom%5Fendpoint), [2](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/object%5Fstructure/shared%5Fendpoint%5Fsettings)]

### Troubleshooting

If OpenRouter does not appear in your UI dropdown, it means your Docker container isn't reading the YAML file correctly. You can instantly verify if there is a mapping error by looking at your container's system logs: \[[1](https://www.librechat.ai/docs/quick%5Fstart/custom%5Fendpoints), [2](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/ai%5Fendpoints/openrouter)]

bash

```
docker compose logs api | grep -i "error"
```

Use code with caution.

If you see a file path error in the logs, let me know your **Operating System** (Windows, macOS, or Linux) so we can ensure Docker has the right file access permissions. \[[1](https://www.librechat.ai/docs/quick%5Fstart/custom%5Fendpoints)]

- [link](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/object%5Fstructure/custom%5Fendpoint)\
  Custom Endpoint Object Structure - LibreChat\
  Jun 1, 2023 — An array of strings indicating the default models to use. If fetching models fails, these defaults are used as a fallback. Require...\
  LibreChat
- [link](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/ai%5Fendpoints/openrouter)\
  OpenRouter - LibreChat\
  Verify It Works. Open LibreChat in your browser. You should see OpenRouter in the endpoint selector dropdown. Select it to see the...\
  LibreChat
- [link](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/object%5Fstructure/shared%5Fendpoint%5Fsettings)\
  Shared Endpoint Settings - LibreChat\
  Enables automatic conversation title generation for this endpoint. titleConvo: true. Default: false. Notes: When enabled, titles w...\
  LibreChat

Show all

## You said: not seen

If OpenRouter is not showing up in your UI dropdown, the root cause is almost always that **the Docker container isn't actually reading your `librechat.yaml` file**. \[[1](https://www.librechat.ai/docs/quick%5Fstart/custom%5Fendpoints)]

By default, Docker doesn't look at the project root for configuration files unless you explicitly map it. Follow these quick diagnostic steps to resolve the issue: \[[1](https://github.com/danny-avila/LibreChat/discussions/2650)]

### 1. Fix the Docker Mapping (Most Likely Cause)

If you are using the standard LibreChat repository setup, your Docker container doesn't automatically mount files from your local folders. You need to use the built-in [Docker Override configuration](https://www.librechat.ai/docs/configuration/docker%5Foverride). \[[1](https://github.com/danny-avila/LibreChat/discussions/2650), [2](https://www.librechat.ai/docs/configuration/librechat%5Fyaml)]

1. Look in your `LibreChat` project root directory for a file named `docker-compose.override.yml`.
2. If it isn't there, create it.
3. Open it and paste the following content to map your local `librechat.yaml` inside the container: \[[1](https://github.com/danny-avila/LibreChat/discussions/2650)]

yaml

```
version: '3.4'

services:
  api:
    volumes:
      - ./librechat.yaml:/app/librechat.yaml
```

Use code with caution.

### 2. Update Your `.env` Path

Ensure that your `.env` file explicitly references this local container path: \[[1](https://huggingface.co/spaces/LibreChat/template/discussions/5)]

env

```
CONFIG_PATH=/app/librechat.yaml
```

Use code with caution.

_(Make sure to use `/app/librechat.yaml` as the value, not just `librechat.yaml`, so the server looks exactly where Docker mounted it)._ \[[1](https://github.com/danny-avila/LibreChat/issues/2649)]

### 3. Check for YAML Schema Errors

LibreChat has a "fail-fast" policy. If you have a single formatting or unrecognized field error in your file, the backend will silently fail to parse it or crash. \[[1](https://github.com/danny-avila/LibreChat/discussions/6779), [2](https://www.librechat.ai/docs/configuration/librechat%5Fyaml)]

Run this command in your terminal to see exactly why it isn't appearing: \[[1](https://www.librechat.ai/docs/quick%5Fstart/custom%5Fendpoints), [2](https://www.librechat.ai/docs/configuration/librechat%5Fyaml)]

bash

```
docker compose logs api
```

Use code with caution.

Look for lines saying `error: Invalid custom config file...` or `ENOENT: no such file or directory`. If you see errors about "unrecognized keys," wrap your custom block entirely inside the `endpoints:` property as shown in the previous configuration. \[[1](https://github.com/danny-avila/LibreChat/discussions/6779), [2](https://github.com/danny-avila/LibreChat/issues/2649)]

### 4. Force a Full Container Rebuild

Apply the updated Docker override file mapping by forcefully stopping, tearing down, and spinning back up the environment:

bash

```
docker compose down
docker compose up -d --build
```

Use code with caution.

Did running `docker compose logs api` surface a specific **YAML syntax/path error**, or are your containers starting up completely clean?

- [link](https://github.com/danny-avila/LibreChat/discussions/6779)\
  Ollama Endpoint Not Showing in LibreChat UI Despite Correct ...\
  Apr 8, 2025 — Troubleshooting Process \* 1. Issue: Ollama Endpoint Configuration Not Applied. Symptom: Modifying the . env file to add Ollama set...\
  GitHub
- [link](https://www.librechat.ai/docs/quick%5Fstart/custom%5Fendpoints)\
  Custom Endpoints | LibreChat\
  Jun 1, 2023 — Step 4. Restart and Verify. After editing configuration files, you must restart LibreChat for changes to take effect. Docker Local...\
  LibreChat
- [link](https://www.librechat.ai/docs/configuration/librechat%5Fyaml)\
  Custom Config - LibreChat\
  Confirm the file is in the LibreChat project root unless you set CONFIG\_PATH . For Docker, confirm the file is mounted in docker-c...\
  LibreChat

Show all

OpenRouter

## You said: .env CONFIG\_PATH=/app/librechat.yamlOPENEROUTER\_API\_KEY= yaml version: 1.1.5endpoints: custom: - name: "OpenRouter" apiKey: "${OPENEROUTER\_API\_KEY}" baseURL: "https://openrouter.ai" models: default: \["none"] fetch: true titleConvo: true titleModel: "current\_model" summarize: true summaryModel: "current\_model"

The issue is your **`baseURL`** entry in your YAML configuration.

You have it set to `https://openrouter.ai`. When LibreChat appends `/v1/models` or `/chat/completions` to that path, it hits the wrong URL and completely fails to load.

### The Fix

1. Open your `librechat.yaml` file.
2. Change the `baseURL` line to explicitly include `/api/v1`.
3. Correct the typos in your `.env` mapping snippet.

Here is exactly how your files should look:

### Updated `librechat.yaml`

yaml

```
version: 1.1.5

endpoints:
  custom:
    - name: "OpenRouter"
      apiKey: "${OPENEROUTER_API_KEY}"
      baseURL: "https://openrouter.ai" # Must end with /api/v1
      models:
        default: ["none"]
        fetch: true
      titleConvo: true
      titleModel: "current_model"
      summarize: true
      summaryModel: "current_model"
```

Use code with caution.

### Updated `.env`

Ensure your variables are on separate, clean lines without mixing the YAML syntax into it:

env

```
CONFIG_PATH=/app/librechat.yaml
OPENEROUTER_API_KEY=sk-or-v1-your-actual-key-here
```

Use code with caution.

### Apply Changes

Force Docker to recreate the container and fetch the fresh configuration:

bash

```
docker compose down
docker compose up -d
```

Use code with caution.

Are you seeing the **OpenRouter** option in your dropdown now, or should we check the **Docker container logs** to see if it is throwing a specific API network error?

## You said: give me the official guide

According to the official [LibreChat Custom Config Guide](https://www.librechat.ai/docs/configuration/librechat%5Fyaml), there is a critical rule regarding OpenRouter:

⚠️ **Do not use `OPENROUTER_API_KEY` in your `.env` file.** Using that exact phrase triggers a known conflict inside the application that can inadvertently override native OpenAI endpoint configurations. The documentation instructs you to use **`OPENROUTER_KEY`** instead. \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml), [2](https://github.com/danny-avila/LibreChat/discussions/4676)]

The official configuration steps are detailed below: \[[1](https://www.librechat.ai/docs/quick%5Fstart/custom%5Fendpoints), [2](https://www.librechat.ai/docs/configuration)]

### Step 1: Update Your `.env` File

Ensure your variables match the official naming convention. Open your `.env` file and verify these exact strings: \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml)]

env

```
CONFIG_PATH=/app/librechat.yaml
OPENROUTER_KEY=sk-or-v1-your-actual-key-here
```

Use code with caution.

### Step 2: Configure `librechat.yaml`

Note how the variable maps precisely to `${OPENROUTER_KEY}`. \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml)]

yaml

```
version: 1.1.5

endpoints:
  custom:
    - name: "OpenRouter"
      apiKey: "${OPENROUTER_KEY}"
      baseURL: "https://openrouter.ai/api/v1"
      models:
        default: ["meta-llama/llama-3-70b-instruct"]
        fetch: true
      titleConvo: true
      titleModel: "current_model"
      summarize: true
      summaryModel: "current_model"
```

Use code with caution.

### Step 3: Mount the File via `docker-compose.override.yml`

Docker deployments must map the local file to the `/app/` directory inside the container for LibreChat to successfully read it. Create or edit a file named `docker-compose.override.yml` in your project root: \[, [2](https://www.librechat.ai/docs/configuration), [3](https://github.com/LibreChat-AI/librechat.ai/blob/main/content/docs/quick%5Fstart/custom%5Fendpoints.mdx)]

yaml

```
version: '3.4'

services:
  api:
    volumes:
      - ./librechat.yaml:/app/librechat.yaml
```

Use code with caution.

### Step 4: Full Hard Restart

To clear any active or persistent configuration caches, drop your containers and bring them back up freshly compiled: \[[1](https://www.librechat.ai/docs/configuration)]

bash

```
docker compose down
docker compose up -d --build
```

Use code with caution.

You can review the full deployment specifications directly on the official [LibreChat OpenRouter Documentation](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/ai%5Fendpoints/openrouter). \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/ai%5Fendpoints/openrouter)]

If OpenRouter is still not appearing, would you like to run **`docker compose logs api`** and share any **error codes** or **parsing messages** you find there? \[[1](https://www.librechat.ai/docs/configuration)]

- [link](https://www.librechat.ai/docs/configuration/librechat%5Fyaml)\
  Custom Config - LibreChat\
  This example walks through adding OpenRouter as a custom endpoint -- one of the most popular configurations. 1. Get an API key fro...\
  LibreChat
- [link](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/ai%5Fendpoints/openrouter)\
  OpenRouter - LibreChat\
  OpenRouter. Complete setup guide for using OpenRouter as a custom endpoint in LibreChat. Copy Markdown Open. OpenRouter provides a...\
  LibreChat
- [link](https://github.com/danny-avila/LibreChat/discussions/4676)\
  OpenRouter doesn't show up in the list of providers #4676\
  Nov 9, 2024 — I'm trying to add openrouter to my digital ocean deployment of librechat, but it doesn't show up in the list for some reason. Step...\
  GitHub

Show all

# . debug, fix typo

```sh
 ~ % cd Documents/.storage
 ~/Documents/.storage % cd librechat
 ~/Documents/.storage/librechat
 % docker compose logs api
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
LibreChat  |
LibreChat  | > LibreChat@v0.8.6 backend
LibreChat  | > cross-env NODE_ENV=production node api/server/index.js
LibreChat  |
LibreChat  | 2026-06-22 13:17:59 warn: [metrics] METRICS_SECRET is not set - /metrics will return 401 for all requests
LibreChat  | 2026-06-22 13:17:59 info: Mongo Connection options
LibreChat  | 2026-06-22 13:17:59 info: {
LibreChat  |   "bufferCommands": false,
LibreChat  |   "autoIndex": false,
LibreChat  |   "autoCreate": false
LibreChat  | }
LibreChat  | 2026-06-22 13:17:59 info: Connected to MongoDB
LibreChat  | 2026-06-22 13:17:59 info: [indexSync] Starting index synchronization check...
LibreChat  | 2026-06-22 13:17:59 info: [ensureBaseConfig] Loading base configuration...
LibreChat  | 2026-06-22 13:17:59 info: Custom config file loaded:
LibreChat  | 2026-06-22 13:17:59 info: {
LibreChat  |   "version": "1.3.5",
LibreChat  |   "cache": true,
LibreChat  |   "endpoints": {
LibreChat  |     "custom": [
LibreChat  |       {
LibreChat  |         "name": "OpenRouter",
LibreChat  |         "apiKey": "${OPENROUTER_KEY}",
LibreChat  |         "baseURL": "https://openrouter.ai/api/v1",
LibreChat  |         "models": {
LibreChat  |           "default": [
LibreChat  |             "meta-llama/llama-3-70b-instruct"
LibreChat  |           ],
LibreChat  |           "fetch": true
LibreChat  |         },
LibreChat  |         "titleConvo": true,
LibreChat  |         "titleModel": "meta-llama/llama-3-70b-instruct",
LibreChat  |         "dropParams": [
LibreChat  |           "stop"
LibreChat  |         ],
LibreChat  |         "modelDisplayLabel": "OpenRouter"
LibreChat  |       }
LibreChat  |     ]
LibreChat  |   }
LibreChat  | }
LibreChat  | 2026-06-22 13:17:59 warn: Default value for CREDS_KEY is being used.
LibreChat  | 2026-06-22 13:17:59 warn: Default value for CREDS_IV is being used.
LibreChat  | 2026-06-22 13:17:59 warn: Default value for JWT_SECRET is being used.
LibreChat  | 2026-06-22 13:17:59 warn: Default value for JWT_REFRESH_SECRET is being used.
LibreChat  | 2026-06-22 13:17:59 info: Please replace any default secret values.
LibreChat  | 2026-06-22 13:17:59 info:
LibreChat  |
LibreChat  |     For your convenience, use this tool to generate your own secret values:
LibreChat  |     https://www.librechat.ai/toolkit/creds_generator
LibreChat  |
LibreChat  |
LibreChat  | 2026-06-22 13:17:59 info:
LibreChat  | Outdated Config version: 1.3.5
LibreChat  | Latest version: 1.3.12
LibreChat  |
LibreChat  |       Check out the Config changelogs for the latest options and features added.
LibreChat  |
LibreChat  |       https://www.librechat.ai/changelog
LibreChat  |
LibreChat  |
LibreChat  | 2026-06-22 13:17:59 info: RAG API is running and reachable at http://rag_api:8000.
LibreChat  | 2026-06-22 13:17:59 info: [StreamServices] Created in-memory stream services
LibreChat  | 2026-06-22 13:17:59 info: [GenerationJobManager] Configured with in-memory stores
LibreChat  | 2026-06-22 13:17:59 info: Server listening on all interfaces at port 3080. Use http://localhost:3080 to access it
LibreChat  | 2026-06-22 13:17:59 info: [MCPServersRegistry] Creating new instance
LibreChat  | 2026-06-22 13:17:59 info: OAuth reconnect manager initialized successfully.
LibreChat  | 2026-06-22 13:17:59 info: Server readiness checks passing.
LibreChat  | 2026-06-22 13:17:59 info: [indexSync] Requesting message sync progress...
LibreChat  | 2026-06-22 13:17:59 info: [indexSync] Messages are fully synced: 0/0
LibreChat  | 2026-06-22 13:17:59 info: [indexSync] Conversations are fully synced: 0/0
LibreChat  | 2026-06-22 13:17:59 warn: [FlowStateManager] completeFlow: flow not found — key=[REDACTED] Possible causes: flow TTL expired before callback arrived, flow was never created, or the callback is routing to a different instance without shared Keyv storage.
LibreChat  | 2026-06-22 13:22:52 error: [ResumableAgentController] Initialization error: {"type":"no_user_key"} {"userId":"6a33f296c7344cc5393569a6"}
LibreChat  | 2026-06-22 13:23:05 error: [ResumableAgentController] Initialization error: {"type":"no_user_key"} {"userId":"6a33f296c7344cc5393569a6"}
LibreChat  | 2026-06-22 13:23:12 error: [ResumableAgentController] Initialization error: {"type":"no_user_key"} {"userId":"6a33f296c7344cc5393569a6"}
LibreChat  | 2026-06-22 13:23:14 error: [ResumableAgentController] Initialization error: {"type":"no_user_key"} {"userId":"6a33f296c7344cc5393569a6"}
LibreChat  | 2026-06-22 13:26:09 error: [ResumableAgentController] Initialization error: Missing API Key for OpenRouter. {"userId":"6a33f296c7344cc5393569a6"}
LibreChat  | 2026-06-22 13:26:16 error: [ResumableAgentController] Initialization error: Missing API Key for OpenRouter. {"userId":"6a33f296c7344cc5393569a6"}
 ~/Documents/.storage/librechat
 % docker compose down && docker compose up -d

WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
[+] down 6/6
 ✔ Container LibreChat        Removed                                                                                             0.3s
 ✔ Container chat-meilisearch Removed                                                                                             0.1s
 ✔ Container rag_api          Removed                                                                                             0.7s
 ✔ Container chat-mongodb     Removed                                                                                             0.1s
 ✔ Container vectordb         Removed                                                                                             0.1s
 ✔ Network librechat_default  Removed                                                                                             0.1s
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
[+] up 6/6
 ✔ Network librechat_default  Created                                                                                             0.0s
 ✔ Container vectordb         Started                                                                                             0.3s
 ✔ Container chat-mongodb     Started                                                                                             0.2s
 ✔ Container chat-meilisearch Started                                                                                             0.3s
 ✔ Container rag_api          Started                                                                                             0.3s
 ✔ Container LibreChat        Started                                                                                             0.4s
```

<!-- fix typo -->

# setup openrouter on librechat. i followed the official guide. Something went wrong. Here's the specific error message we encountered: Missing API Key for OpenRouter.

The "**Missing API Key for OpenRouter**" error typically means LibreChat cannot access the environment variable containing your key, often due to a naming mismatch or a Docker mounting issue. \[[1](https://www.librechat.ai/docs/quick%5Fstart/custom%5Fendpoints), [2](https://www.librechat.ai/docs/configuration/librechat%5Fyaml)]

Follow these steps to resolve the issue:

### 1. Fix the Naming Mismatch in `.env` \[[1](https://www.reddit.com/r/JanitorAI%5FOfficial/comments/1m7r5ti/openrouter%5Ferror%5Fguide%5Fso%5Fyou%5Fdont%5Fhave%5Fto%5Fscroll/)]

LibreChat requires you to use **`OPENROUTER_KEY`**, not `OPENROUTER_API_KEY`. \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/ai%5Fendpoints/openrouter)]

- Open your `.env` file in your root folder.
- Ensure your key is defined exactly like this: \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/ai%5Fendpoints/openrouter), [2](https://community.n8n.io/t/openrouter-model-node-suddenly-failing-with-incorrect-api-key-provided/166239)]

env

```
OPENROUTER_KEY=sk-or-v1-your-actual-api-key-here
```

Use code with caution.

_(Do not use quotes unless your key has special characters, and make sure there are no trailing spaces)._ \[[1](https://community.n8n.io/t/openrouter-model-node-suddenly-failing-with-incorrect-api-key-provided/166239), [2](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/ai%5Fendpoints/openrouter)]

### 2. Match the Reference in `librechat.yaml` \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/ai%5Fendpoints/openrouter)]

LibreChat looks for a custom endpoint variable matching your `.env` file. Open your `librechat.yaml` file and confirm your OpenRouter configuration blocks exactly match this syntax: \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/ai%5Fendpoints/openrouter), [2](https://www.librechat.ai/docs/quick%5Fstart/custom%5Fendpoints), [3](https://docs.portkey.ai/docs/integrations/mcp-clients/librechat), [4](https://www.reddit.com/r/openclaw/comments/1say8lw/404%5Ferror%5Fopen%5Frouter%5Fqwen%5F36%5Ffree/), [5](https://www.librechat.ai/docs/configuration/librechat%5Fyaml)]

yaml

```
endpoints:
  custom:
    - name: "OpenRouter"
      apiKey: "${OPENROUTER_KEY}"
      baseURL: "https://openrouter.ai/api/v1"
      # ... other config options
```

Use code with caution.

- Ensure the `apiKey` field uses the **`${OPENROUTER_KEY}`** variable to read from your `.env` file. \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/ai%5Fendpoints/openrouter)]

### 3. Verify Docker Volume Mounts \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml)]

If using Docker, modifications to `librechat.yaml` require mounting it into the container. \[[1](https://www.librechat.ai/docs/quick%5Fstart/custom%5Fendpoints)]

1. Check `docker-compose.override.yml` in your root folder.
2. Ensure the volume mapping is present, directing `./librechat.yaml` to `/app/librechat.yaml` within the container. \[[1](https://www.librechat.ai/docs/configuration), [2](https://github.com/LibreChat-AI/librechat.ai/blob/main/content/docs/quick%5Fstart/custom%5Fendpoints.mdx)]

### 4. Restart and Verify

Apply changes by restarting Docker with: \[[1](https://www.librechat.ai/docs/quick%5Fstart/custom%5Fendpoints)]

bash

```
docker compose down && docker compose up -d
```

Use code with caution.

If errors persist, check logs with `docker compose logs api | grep -i "openrouter"`. \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml)]

- [link](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/ai%5Fendpoints/openrouter)\
  OpenRouter - LibreChat\
  Get an API Key. Create an account at openrouter.ai and generate an API key from the Keys page. Copy the key -- it starts with sk-o...\
  LibreChat
- [link](https://community.n8n.io/t/openrouter-model-node-suddenly-failing-with-incorrect-api-key-provided/166239)\
  OpenRouter Model Node Suddenly Failing with “Incorrect API ...\
  Aug 12, 2025 — It could be because the credential you switch to has no base URL set or is using the wrong type (OpenAI instead of OpenRouter). Pl...\
  n8n Community
- [link](https://www.librechat.ai/docs/quick%5Fstart/custom%5Fendpoints)\
  Custom Endpoints | LibreChat\
  Jun 1, 2023 — Validate your YAML with the YAML Validator. OpenRouter Still Does Not Show Up. For OpenRouter specifically, verify the three-file ...\
  LibreChat

Show all

OpenRouter

## You said: i do have OPENEROUTER\_KEY=sk-or-v1-... on .env and yaml copied from official guide version: 1.3.5cache: trueendpoints: custom: - name: "OpenRouter" apiKey: "${OPENROUTER\_KEY}" baseURL: "https://openrouter.ai/api/v1" models: default: \["meta-llama/llama-3-70b-instruct"] fetch: true titleConvo: true titleModel: "meta-llama/llama-3-70b-instruct" dropParams: \["stop"] modelDisplayLabel: "OpenRouter"

The primary issue causing the "**The model api/v1 is not available**" error is a subtle typo in your `.env` file configuration.

### 1. Fix the Typo in `.env`

In your message, you wrote: `OPENEROUTER_KEY=sk-or-v1-...`.\
Notice the extra **`E`** in the name.

Your `librechat.yaml` file is looking for `${OPENROUTER_KEY}`, which means it is attempting to pull a variable that does not exist because of the typo. This leaves the API key blank, causing OpenRouter to reject the request with that specific model error page. \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml), [2](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/ai%5Fendpoints/openrouter)]

- Open your `.env` file.

- Correct the spelling exactly to this:\
  env

<!---->

```
OPENROUTER_KEY=sk-or-v1-your-actual-api-key-here
```

Use code with caution.

### 2. Verify Your Docker Env File (If applicable)

If you are running LibreChat in a Docker container, you must completely reset the container environment for `.env` changes to pass through:

bash

```
docker compose down
docker compose up -d
```

Use code with caution.

### 3. Check for Hidden Line Breaks

If fixing the spelling doesn't work right away, ensure your `.env` file didn't copy-paste any strange formatting.

- Make sure there are no spaces before or after the `=` sign.
- Ensure the key is entirely on one line. \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml), [2](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/ai%5Fendpoints/openrouter)]

If you fix the spelling and it still gives you trouble, let me know if you are running it via **Docker** or a **local Node.js install**, and we can check your server logs!

- [link](https://www.librechat.ai/docs/configuration/librechat%5Fyaml)\
  Custom Config - LibreChat\
  1\. Get an API key from openrouter.ai/keys. 2. Add the key to your .env file: OPENROUTER\_KEY=sk-or-v1-your-key-here. Environment Va...\
  LibreChat
- [link](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/ai%5Fendpoints/openrouter)\
  OpenRouter - LibreChat\
  Get an API Key. Create an account at openrouter.ai and generate an API key from the Keys page. Copy the key -- it starts with sk-o...\
  LibreChat

# 

