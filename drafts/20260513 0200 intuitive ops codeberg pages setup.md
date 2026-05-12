<!-- i were about to put a codeberg pages link after my qq name. yet, the server is down. -->

how to create codeberg pages

Creating Codeberg Pages is straightforward and typically involves setting up a specific repository or branch to host your static files. Your site will be accessible at `https://[username].`[`codeberg.page/`](https://codeberg.page/). \[[1](https://claytonerrington.com/blog/codeberg-pages/), [2](https://codeberg.page/), [3](https://tonisagrista.com/blog/2022/codeberg-setup/), [4](https://calebukle.com/blog/angular-code-coverage-badge-with-gitlab-ci/), [5](https://docs.codeberg.org/codeberg-pages/)]

1\. Simple Setup (Main Website)

To create a website for your primary user or organization profile:

- **Create a new public repository** named exactly `pages`.
- **Create a branch** named `pages` within that repository.
- **Upload your static content** (HTML, CSS, images, etc.) to the root of this `pages` branch.
- **View your site**: Once pushed, it should be live at `https://[username].``codeberg.page/`. \[[1](https://docs.codeberg.org/codeberg-pages/), [2](https://codeberg.page/), [3](https://gem.xmgz.eu/gemlog/2021-12-10-codeberg-pages-en.gmi), [4](https://tonisagrista.com/blog/2022/codeberg-setup/)]

2\. Project-Specific Pages

To host a website for a specific project (e.g., `https://[username].codeberg.page/[repository-name]`):

- **In any public repository**, create an orphan branch named `pages`.
- **Add a Webhook**: Go to your repository **Settings** > **Webhooks** > **Add Webhook**.
  - Select **Forgejo** as the type.
  - Enter your target URL (e.g., `https://[username].``codeberg.page/`).
  - Set the **Branch filter** to `pages`.
- **Upload files** to that branch and they will automatically publish. \[[1](https://shellsharks.com/devlog/planting-a-website-on-codeberg-pages), [2](https://docs.codeberg.org/codeberg-pages/), [3](https://codeberg.page/), [4](https://tonisagrista.com/blog/2022/codeberg-setup/)]

3\. Custom Domains

If you want to use a personal domain instead of the default `.``codeberg.page` address:

- **Add a `.domains` file**: Create a file named `.domains` in the root of your `pages` branch.
- **List your domain**: Type your domain name (e.g., `example.com`) inside that file, one per line.
- **Update DNS**: Point your domain to Codeberg using a **CNAME record** for subdomains or **A/AAAA/ALIAS records** for apex domains.
  - **A Record**: `217.197.84.141`
  - **AAAA Record**: `2a0a:4580:103f:c0de::2` \[[1](https://codeberg.page/), [2](https://codeberg.org/Codeberg/pages-server/wiki/Overview), [3](https://shellsharks.com/devlog/planting-a-website-on-codeberg-pages), [4](https://docs.codeberg.org/codeberg-pages/using-custom-domain/)]

Key Tips

- **Custom 404 Page**: You can use a custom error page by adding a `404.html` file to the root of your repository.
- **Default File**: Ensure your main entry point is named `index.html`.
- **Documentation**: For more advanced setups like using CI/CD builders (e.g., Zola or Hugo), refer to the official [Codeberg Pages Documentation](https://docs.codeberg.org/codeberg-pages/). \[[1](https://docs.codeberg.org/codeberg-pages/advanced-usage/), [2](https://docs.codeberg.org/codeberg-pages/forgejo-actions/), [3](https://codeberg.page/), [4](https://aartaka.me/codeberg-pages.html), [5](https://docs.codeberg.org/codeberg-pages/), [6](https://www.getzola.org/documentation/deployment/codeberg-pages/)]

Would you like help setting up a **CI/CD pipeline** to automatically build your site from Markdown files?

- [link](https://docs.codeberg.org/codeberg-pages/)\
  Codeberg Pages\
  Create a repository called pages under your own username or under the organization you want to create a website for. The website w...\
  Codeberg Documentation
- [link](https://aartaka.me/codeberg-pages.html)\
  Codeberg Pages with SSL and Custom Domain\
  Getting Started with Codeberg Pages. The documentation by Codeberg is good enough: Create a pages repository, add HTML files to th...\
  Artyom Bologov
- [link](https://codeberg.page/)\
  Codeberg Pages - static pages for your projects\
  1 Set up your repository. Create a public repository named pages to make the site available at the main subdomain. or. Create a br...\
  codeberg.page

Show all

can i create a project and use foo.codeberg.page instead of myname.codeberg.page

Yes, you can use a specific project name in the URL, but by default, it will be structured as `https://[username].codeberg.page/[project-name]/`. \[[1](https://docs.codeberg.org/codeberg-pages/), [2](https://codeberg.page/)]

If you specifically want a subdomain format like `foo.[username].codeberg.page`, that is also technically supported. Here is how the different URL structures work: \[[1](https://codeberg.org/Codeberg/Community/issues/1095)]

Standard Project URL

If you create a branch named `pages` in a repository called `foo`, your site will automatically be available at:

- **URL:** `https://[username].codeberg.page/foo/` \[[1](https://docs.codeberg.org/codeberg-pages/), [2](https://codeberg.page/)]

Subdomain Formats

Codeberg's page server also responds to deeper subdomain levels, allowing you to point directly to a repository or even a specific branch: \[]

- **Per Repo:** `foo.[username].codeberg.page`
- **Per Branch:** `[branchname].foo.[username].codeberg.page` \[[1](https://codeberg.org/Codeberg/Community/issues/1095), [3](https://docs.codeberg.org/codeberg-pages/using-custom-domain/)]

**Important Note on Security Warnings:**\
If your username or repository name contains a **dot** (e.g., `my.project`), using these deep subdomains (like `my.project.username.codeberg.page`) may trigger browser security warnings. This is because Let's Encrypt wildcard certificates don't always cover "sub-sub-domains". To avoid this, use hyphens or underscores instead of dots in your names. \[, [2](https://codeberg.org/Codeberg/Community/issues/1111), [3](https://docs.codeberg.org/codeberg-pages/troubleshooting/)]

Using a Truly Custom Subdomain

If "foo" is a custom domain you own (like `://example.com`), you can use that instead of any `codeberg.page` address. You simply need to: \[]

1. Create a `.domains` file in your `pages` branch containing `://example.com`.
2. Set up a **CNAME record** in your DNS settings for `foo` pointing to `[username].`[`codeberg.page`](https://codeberg.page/). \[[1](https://codeberg.org/Codeberg/pages-server/wiki/Overview), [3](https://codeberg.org/Codeberg/Community/issues/656)]

Do you need help with the **DNS settings** for a custom domain?

- [link](https://docs.codeberg.org/codeberg-pages/)\
  Codeberg Pages\
  Enter https://username.codeberg.page/repository-name/ as the Target URL, replacing the username with your Codeberg username or org...\
  Codeberg Documentation
- [link](https://docs.codeberg.org/codeberg-pages/using-custom-domain/)\
  Using custom domains - Codeberg Documentation\
  Table\_title: Setting the DNS record Table\_content: header: | Domain Scheme | Pages URL | row: | Domain Scheme: username.codeberg.p...\
  Codeberg Documentation
- [link](https://codeberg.org/Codeberg/Community/issues/1111)\
  How do I use codeberg.page if my username/repo have a ...\
  Hey @bengo, you can take a look at the \[Codeberg Documentation]\(https://docs.codeberg.org/codeberg-pages/troubleshooting/#my-web-b...\
  Codeberg.org

Show all

i want myproject.codeberg.page, nothing else. do i have to pick my username after the project.

No, you cannot get `myproject.codeberg.page` if your username is different. All default URLs on the platform require your username or organization name because names must be globally unique. \[[1](https://docs.codeberg.org/codeberg-pages/), [2](https://www.reddit.com/r/github/comments/13ayiw0/how%5Fto%5Fcreate%5Furl%5Fwithout%5Fusername%5Fin%5Ffront/)]

However, you have two ways to achieve a shorter or "project-first" address:

1\. Create a Codeberg Organization

If you want the URL to be `https://myproject.codeberg.page/`, you can create an organization named **myproject**. \[[1](https://codeberg.org/Codeberg/Community/issues/218)]

- **Create a repository** named `pages` inside that organization.
- **Create a branch** named `pages` in that repository.
- Your site will then live at `https://myproject.codeberg.page/`. \[, [2](https://codeberg.org/Codeberg/Community/issues/218)]

2\. Use a Custom Domain \[[1](https://docs.codeberg.org/codeberg-pages/)]

If you want a URL like `myproject.com` or `myproject.yourdomain.com` with no mention of Codeberg or your username:

- Add a [custom domain](https://docs.codeberg.org/codeberg-pages/using-custom-domain/) by creating a `.domains` file in your `pages` branch.
- Point your domain's DNS to Codeberg's servers. \[[1](https://docs.codeberg.org/codeberg-pages/using-custom-domain/), [2](https://btxx.org/posts/berg/), [3](https://codeberg.org/Codeberg/pages-server), [4](https://codeberg.page/)]

Without an organization or a custom domain, your standard options are `[username].codeberg.page/myproject/` or `myproject.[username].codeberg.page`. \[[1](https://codeberg.org/Codeberg/Community/issues/1095), [2](https://codeberg.org/Codeberg/Community/issues/1095), [3](https://btxx.org/posts/berg/), [4](https://codeberg.org/Codeberg/pages-server/wiki/Overview)]

Would you like the specific **DNS records** needed to set up a custom domain?

- [link](https://docs.codeberg.org/codeberg-pages/using-custom-domain/)\
  Using custom domains - Codeberg Documentation\
  Warning. Codeberg Pages is currently migrating from the legacy v2 codebase to the newer git-pages codebase. Currently, websites th...\
  Codeberg Documentation
- [link](https://docs.codeberg.org/codeberg-pages/)\
  Codeberg Pages\
  Codeberg Pages allows you to easily publish static websites with a human-friendly address ( {username}. codeberg. page ) or your c...\
  Codeberg Documentation
- [link](https://codeberg.org/Codeberg/Community/issues/218)\
  \[enhancement] Have codeberg pages per repository #218\
  So you would need to separate the WEB pages from the rest of your project, but at least you get an URL without the codeberg userna...\
  Codeberg.org

Show all

can i have a 404 page that redirects all traffic

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, you can create a 404 page that redirects all traffic on </span><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Codeberg Pages</span> using two main methods: a </span><strong>server-side redirect rule</strong> or a <strong>client-side meta refresh/script</strong></mark>. \[[1](https://docs.codeberg.org/codeberg-pages/advanced-usage/), [2](https://docs.codeberg.org/codeberg-pages/)]

1\. Server-Side Redirect (Recommended)

Codeberg Pages supports a `_redirects` file that allows you to handle wildcards. This is the cleanest way to redirect all non-existent paths to a specific page. \[, [2](https://docs.codeberg.org/codeberg-pages/redirects/)]

- **Create a file** named `_redirects` in the root of your `pages` branch.

- **Add the following rule** to redirect all paths to your homepage:\
  text

<!---->

```
/*  /index.html  200
```

Use code with caution.\
_Using `200` performs a "rewrite," meaning the content of your homepage is shown while the URL remains what the user typed. Change `200` to `301` if you want the browser URL to actually change to the homepage address_. \[, [2](https://docs.codeberg.org/codeberg-pages/redirects/), [3](https://docs.codeberg.org/codeberg-pages/redirects/)]

2\. Client-Side 404 Redirect

If you prefer using a standard `404.html` file, you can embed a redirect directly into that file's HTML. Codeberg will automatically serve this file whenever a page isn't found. \[, [2](https://www.reddit.com/r/CloudFlare/comments/1oous1o/i%5Fwant%5F404%5Frequests%5Fto%5Fgo%5Fto%5Fcustom%5Fpage%5Finstead/)]

- **Create a file** named `404.html` in your root directory.

- **Insert a Meta Refresh** tag in the to redirect instantly:\
  html

<!---->

```
<meta http-equiv="refresh" content="0; URL='https://yourproject.codeberg.page/'" />
```

Use code with caution.

- **Alternative JavaScript Redirect**:\
  html

<!---->

```
<script>window.location.href = "/";</script>
```

Use code with caution.\
\[, [2](https://www.youtube.com/watch?v=GWN1MNbP85I)]

Important Considerations

- **SEO Impact**: Search engines generally dislike "soft 404s" (redirecting all errors to the homepage), as it can make it harder for them to understand which pages actually exist.
- **SPA Mode**: If you are building a Single Page Application (like React or Vue), the `/* /index.html 200` rule is standard practice to ensure your app handles routing instead of the server. \[, [2](https://www.urllo.com/resources/learn/404-not-found-error-seo), [3](https://www.reddit.com/r/SEO/comments/191zp69/should%5Fyou%5Fredirect%5Fall%5Fpages%5Fwith%5F404/), [4](https://docs.codeberg.org/codeberg-pages/redirects/)]

For more advanced configurations, you can check the [Advanced Usage documentation](https://docs.codeberg.org/codeberg-pages/advanced-usage/) on Codeberg. \[[1](https://docs.codeberg.org/codeberg-pages/advanced-usage/)]

Would you like help writing a **custom 404 page** with a "Return Home" timer instead of an instant redirect?

- [link](https://docs.codeberg.org/codeberg-pages/advanced-usage/)\
  Advanced usage | Codeberg Documentation\
  Custom error page for 404s. You can replace the default 404 error page that Codeberg Pages will show for missing pages with your o...\
  Codeberg Documentation
- [link](https://docs.codeberg.org/codeberg-pages/redirects/)\
  Redirects - Codeberg Documentation\
  \* Lines starting with # are ignored. \* from - the path to redirect from (Note: repository and branch names are removed from reques...\
  Codeberg Documentation
- [link](https://www.urllo.com/resources/learn/404-not-found-error-seo)\
  404 SEO guide: do 404 errors hurt SEO? Learn best practices. - urllo\
  No, you should not redirect every 404 to your homepage. This practice harms both user experience and SEO.\
  urllo

Show all

write a 404 page in html that prints the current url to screen. no styling.

To create a `404.html` file that displays the current URL without any styling, you can use a small snippet of JavaScript to grab the location from the browser.

Create a file named **`404.html`** in the root of your `pages` branch with this content:

html

```
<!DOCTYPE html>
<html>
<head>
    <title>404 Not Found</title>
</head>
<body>
    <p>The page you requested was not found:</p>
    <p id="url"></p>

    <script>
        document.getElementById('url').textContent = window.location.href;
    </script>
</body>
</html>
```

Use code with caution.

How it works:

- **`window.location.href`**: This pulls the full URL (including the protocol and domain) currently in the address bar.
- **`.textContent`**: Using this instead of `.innerHTML` is a security best practice to prevent potential XSS attacks from malicious URLs.
- **Codeberg Behavior**: Codeberg will automatically serve this specific file whenever a user visits a link that doesn't exist in your repository.

Do you want to add a **"Return Home"** link that automatically points back to your main site?

codeberg server outrage on creating repo

There is no current platform-wide "outage" for creating repositories on Codeberg. If you are experiencing errors, it is likely due to one of the following common technical issues or platform restrictions. \[[1](https://statusgator.com/services/codeberg)]

1\. "Push-to-Create" is Disabled \[[1](https://docs.codeberg.org/getting-started/first-repository/)]

If you are trying to create a repository by simply running `git push` from your local terminal, it will fail. \[[1](https://codeberg.org/Codeberg/Community/issues/1622)]

- **The Error**: `remote: Push to create is not enabled for users.`
- **The Fix**: You must first create the empty repository via the Codeberg Web UI. Once created online, you can then add it as a remote and push your code. \[[1](https://forgejo.org/docs/next/user/first-repository/), [2](https://codeberg.org/Codeberg/Community/issues/1622), [3](https://docs.codeberg.org/getting-started/first-repository/)]

2\. Internal Server Error (500)

A "500 Internal Server Error" during repository creation or migration is often a temporary glitch or a timeout. \[[1](https://docs.codeberg.org/advanced/migrating-repos/)]

- **Failed Migrations**: If migrating from [GitHub](https://github.com/) or GitLab, large repositories may time out, leaving an "inaccessible" repo behind.
- **The Fix**: Append `/settings` to your repository URL (e.g., `https://codeberg.org`) to delete the failed attempt and try again. \[[1](https://docs.codeberg.org/advanced/migrating-repos/)]

3\. Account or Rate Limits

- **New User Verification**: If your account is very new, you may need to wait for email verification or manual anti-spam checks before you can create multiple repositories.
- **Rate Limiting**: Quickly creating or deleting repositories may trigger a temporary "429 Too Many Requests" block. \[[1](https://codeberg.org/Codeberg/Community/issues/1297), [2](https://codeberg.org/Codeberg/Community/issues)]

4\. Browser/Bot Blocks

Codeberg recently implemented stricter bot-detection measures. \[]

- **The Issue**: Some browsers (like Min or Falkon) or VPNs can trigger a "bot trap," preventing you from submitting forms like the "New Repository" page.
- **The Fix**: Try using a mainstream browser (Firefox/Chrome) or disabling your VPN temporarily to see if the creation form works. \[[1](https://codeberg.org/Codeberg/Community/issues)]

For real-time updates on infrastructure status, you can check the Official Codeberg Status or view community-reported Forgejo/Codeberg issues. \[]

Are you getting a **specific error code** (like 500 or 403) when you click the "Create Repository" button?

- [link](https://docs.codeberg.org/advanced/migrating-repos/)\
  Migrating Repositories - Codeberg Documentation\
  Inaccessible repo after failed migration Sometimes a migration might fail for no obvious reasons like timeouts or invalid data in ...\
  Codeberg Documentation
- [link](https://codeberg.org/Codeberg/Community/issues)\
  Issues - Codeberg/Community\
  \* Deployments on codeberg? #2613 opened in future by DataSquirrel. \* Some clarifications before migrating from Gihub. #2609 opened...\
  Codeberg.org
- [link](https://forgejo.org/docs/next/user/first-repository/)\
  Your First Repository | Forgejo – Beyond coding. We forge.\
  Sep 26, 2020 — 1. Initialize a Git Repository. Unless you already have a Git Repository initialized in your local source tree, run git init in yo...\
  Forgejo

Show all

504 Gateway Time-out

A **504 Gateway Time-out** error when creating a repository means <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">the front-end server (proxy) is waiting for the back-end database or file system to finish the task, but the back-end is taking too long to respond</mark>. \[[1](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/504), [2](https://www.logicmonitor.com/deep-dive/api-monitoring-tools/api-gateway-timeout)]

Since this is a server-side communication issue, you cannot fix it directly. However, you can try these steps to bypass or resolve the temporary hang: \[[1](https://www.godaddy.com/resources/in/web-pro-in/6-proven-methods-for-fixing-the-504-gateway-timeout-error), [2](https://www.youtube.com/watch?v=Pct0T1jZBhI), [3](https://stackoverflow.com/questions/43832389/what-can-i-do-to-fix-a-504-gateway-timeout-error), [4](https://scalesta.com/blog/504-gateway-timeout-error/)]

Immediate Steps

- **Check the Repository List**: Often, the server _actually finishes_ creating the repository even if the web page timed out. Go to your profile page to see if the new repo already exists.
- **Wait and Refresh**: Codeberg may be under heavy load or performing maintenance. Wait 5–10 minutes and try again.
- **Simplify the Creation**: If you are trying to "Initialize with README" or "Migrate" a massive repository, these operations are more likely to time out. Try creating a **completely empty repository** first, then pushing your code manually via Git. \[[1](https://forum.gitea.com/t/504-gateway-timeout-on-repository-creation/7419), [2](https://www.statsig.com/perspectives/gateway-timeout-diagnosis-enterprise-solutions), [3](https://www.siteground.com/kb/504-gateway-timeout/), [4](https://wpmarmite.com/en/504-gateway-timeout/), [5](https://www.hostinger.com/uk/tutorials/504-gateway-timeout)]

Troubleshoot Local Issues

While usually server-side, local factors can occasionally trigger timeouts: \[, [2](https://www.siteground.com/kb/504-gateway-timeout/), [3](https://www.statsig.com/perspectives/gateway-timeout-diagnosis-enterprise-solutions)]

- **Disable VPN/Proxy**: If you are using a VPN, it might be adding latency that exceeds Codeberg's timeout threshold.
- **Check Status Pages**: Verify if there is a known platform-wide incident on the official Codeberg Status or community-monitored sites like [StatusGator](https://statusgator.com/services/codeberg).
- **Switch Browsers**: Some lightweight browsers or strict privacy settings can occasionally interfere with the script that submits the creation form. \[[1](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/504), [2](https://wpx.net/blog/504-gateway-timeout-what-it-means-and-how-to-fix-it/), [3](https://statusgator.com/services/codeberg), [4](https://amasty.com/blog/fixing-504-gateway-timeout-errors/), [5](https://codeberg.org/Codeberg/Community/issues)]

If the error persists for more than an hour, you can report it to the community on the [Codeberg Issue Tracker](https://codeberg.org/Codeberg/Community/issues). \[[1](https://codeberg.org/Codeberg/Community/issues)]

**Did the repository show up in your list even after the error message appeared?**

- [link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/504)\
  504 Gateway Timeout - HTTP - MDN Web Docs\
  Jul 4, 2025 — The HTTP 504 Gateway Timeout server error response status code indicates that the server, while acting as a gateway or proxy, did ...\
  MDN Web Docs
- [link](https://www.logicmonitor.com/deep-dive/api-monitoring-tools/api-gateway-timeout)\
  API Gateway Timeout: Causes and Solutions | LogicMonitor\
  Apr 1, 2026 — The quick download: A 504 gateway timeout is never just a timeout. It is a signal that something upstream is broken, slow, or misc...\
  LogicMonitor
- [link](https://www.godaddy.com/resources/in/web-pro-in/6-proven-methods-for-fixing-the-504-gateway-timeout-error)\
  6 proven methods for fixing the 504 Gateway Timeout error\
  Dec 1, 2022 — FAQs about 504 Gateway Timeout error. Is a 504 Gateway Timeout my fault? No, the 504 Gateway Timeout error is not your fault. The ...\
  GoDaddy

Show all

i suppose it's on their side

You are correct; a **504 Gateway Time-out** is almost always a server-side issue. It signifies that one server (the gateway) didn't receive a timely response from another (the upstream server) required to complete your request. \[[1](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/http-504-gateway-timeout.html), [2](https://elementor.com/blog/what-is-a-504-gateway-timeout-error/), [3](https://www.wix.com/encyclopedia/definition/error-504), [4](https://www.siteground.com/kb/504-gateway-timeout/)]

While there isn't a major reported outage at this moment, here’s what likely happened behind the scenes:

- **Database Lag**: The task of setting up your new repository’s file structure and database entries took longer than the server’s predefined timeout limit (often 60 seconds).
- **Momentary Overload**: A spike in traffic or a background maintenance task may have temporarily slowed down the "upstream" server that handles repository creation.
- **"Ghost" Creation**: Because the back-end often continues working after the gateway gives up, the repository might have been created anyway. Check your repository dashboard to see if it appeared. \[[1](https://stackoverflow.com/questions/43832389/what-can-i-do-to-fix-a-504-gateway-timeout-error), [2](https://www.hostinger.com/ph/tutorials/504-gateway-timeout), [3](https://forum.gitea.com/t/504-gateway-timeout-on-repository-creation/7419), [4](https://www.siteground.com/kb/504-gateway-timeout/)]

If it’s not there, waiting 15–20 minutes and trying again usually resolves it once the server load stabilizes. \[, [2](https://wpx.net/blog/504-gateway-timeout-what-it-means-and-how-to-fix-it/)]

Would you like to try **pushing your local code** to see if the repository was secretly created despite the error?

- [link](https://stackoverflow.com/questions/43832389/what-can-i-do-to-fix-a-504-gateway-timeout-error)\
  What can I do to fix a 504 gateway timeout error?\
  May 7, 2017 — There is nothing you can do. You are sending a request to a server. This particular request fails, because the server sends a requ...\
  Stack Overflow
- [link](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/http-504-gateway-timeout.html)\
  HTTP 504 status code (Gateway Timeout) - Amazon CloudFront\
  An HTTP 504 status code (gateway timeout) indicates that when CloudFront forwarded a request to the origin (because the requested ...\
  Amazon AWS Documentation
- [link](https://elementor.com/blog/what-is-a-504-gateway-timeout-error/)\
  What Is a 504 Gateway Timeout Error? 10 Reliable Solutions ...\
  Nov 13, 2025 — Key Takeaways. What a 504 Is: A 504 Gateway Timeout error is a server-side error. It means one server (acting as a gateway) did no...\
  Elementor

Show all