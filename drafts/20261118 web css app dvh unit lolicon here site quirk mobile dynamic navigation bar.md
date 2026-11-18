<!-- bg: https://lolicon.here/ demo published by 初雪(r18) on cyan nyan tg group -->

# how to setup github pages for a github org

To set up a GitHub Pages site for a GitHub organization, **create a repository named `<org-name>.github.io`** (replacing `<org-name>` with your exact organization name in all lowercase) and configure its publishing source in the repository settings. [](https://docs.github.com/articles/creating-project-pages-manually)

### Step 1: Verify Organization Permissions

Before creating the site, make sure your organization allows members to publish Pages. [](https://docs.github.com/en/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)

* **Check Member Privileges.** Go to your organization's page, click **Settings**, select **Member privileges** under the "Access" sidebar, and ensure **Public** is checked under "Pages creation". [](https://docs.github.com/en/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)
* **Review Plan Requirements.** If your organization uses the free plan, the repository must be public. Organizations on GitHub Team or Enterprise plans can publish from private repositories, though the live website remains publicly visible on the internet unless you use Enterprise Cloud access controls. [](https://docs.github.com/en/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)

### Step 2: Create the Organization Repository

* **Start a New Repository.** Click the **+** icon in the upper-right corner of GitHub and select **New repository**.
* **Set the Owner.** Use the **Owner** dropdown menu to choose your organization rather than your personal account.
* **Name the Repository.** Type `<org-name>.github.io` in all lowercase letters (for example, `acme-corp.github.io`). According to users on [Stack Overflow](https://stackoverflow.com/questions/66001698/how-to-make-a-github-pages-for-an-organization), using this exact naming convention tells GitHub to host the site at `https://<org-name>.github.io`. _(Note: If you want a site for a specific project inside the org, you can name it anything; it will publish to `https://<org-name>.github.io/<repo-name>` instead.)_
* **Initialize the Repo.** Set the visibility, toggle **Add a README file** to on, and click **Create repository**. [](https://docs.github.com/en/pages/quickstart)

### Step 3: Add Your Website Files

* **Upload Static Content.** Add your `index.html`, CSS, JavaScript, or static site generator files (like Jekyll or Next.js) to the repository. GitHub Pages only hosts static files and does not run server-side languages like Python, Ruby, or PHP. [](https://www.youtube.com/watch?v=M%5Fx2r36WC4s&t=11)

### Step 4: Configure and Publish

You can follow the [GitHub Pages Quickstart](https://docs.github.com/en/pages/quickstart) to turn on hosting: [](https://docs.github.com/en/pages/quickstart)

* **Open Pages Settings.** In your new repository, go to **Settings** and select **Pages** under the "Code and automation" section in the left sidebar. [](https://docs.github.com/en/pages/quickstart)
* **Choose a Build Source.** Under "Build and deployment," select **Deploy from a branch** to publish directly from a folder (usually `main` and `/root`), or select **GitHub Actions** if you use a custom build workflow. [](https://www.youtube.com/watch?v=b2r9Cdvssi0&vl=en&t=28)
* **Save and Wait.** Click **Save**. Your site will go live within a few minutes at the URL displayed at the top of the Pages settings screen. [](https://www.youtube.com/watch?v=QyFcl%5FFba-k&t=176)

_(Optional)_ If you want to use your own web address, you can add it under the **Custom domain** section on that same Pages settings screen. Follow the [GitHub Custom Domain Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) to point your DNS records to GitHub and enable **Enforce HTTPS**. [](https://www.youtube.com/watch?v=e5AwNU3Y2es&t=16)

If you'd like help with the next steps, let me know:

* Whether you are using a **static site generator** (like Jekyll, Hugo, or Next.js) or plain HTML
* If you plan to connect a **custom domain**

I can walk you through the exact GitHub Actions workflow or DNS settings you need.

* [](https://docs.github.com/en/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)  
GitHub Docs  
Managing the publication of GitHub Pages sites for your ...  
Organization owners can manage the publication of GitHub Pages sites from repositories in the organization. GitHub Pages is availa...
* [](https://docs.github.com/articles/creating-project-pages-manually)  
GitHub Docs  
Creating a GitHub Pages site  
For example, you can have a dedicated branch and folder to hold your site source files, or you can use a custom GitHub Actions wor...
* [](https://docs.github.com/en/pages/quickstart)  
GitHub Docs  
Quickstart for GitHub Pages  
Under "Build and deployment", under "Source", select Deploy from a branch. \* Under "Build and deployment", under "Branch", use the...

Show all

# write a html page to test quirk for different app height unit on mobile w dynamic navigation bar

Here’s a self-contained HTML test page for comparing mobile viewport height units when the browser's dynamic navigation bar expands and collapses.

It tests:

- `100vh` — legacy viewport height
- `100svh` — small viewport height
- `100lvh` — large viewport height
- `100dvh` — dynamic viewport height
- `window.innerHeight` — JavaScript viewport measurement
- `window.visualViewport.height` — visual viewport measurement

It also includes live measurements, colored viewport overlays, scroll testing, and a resize event log.

```

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Mobile Viewport Height Test</title>

<style>
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: system-ui, sans-serif;
    background: #111827;
    color: white;
  }

  body {
    padding: 12px;
  }

  h1 {
    font-size: 21px;
  }

  .info {
    color: #9ca3af;
    font-size: 13px;
  }

  .test {
    margin: 14px 0;
    border: 1px solid #475569;
    border-radius: 8px;
    overflow: hidden;
  }

  .test h2 {
    font-size: 15px;
    margin: 0;
    padding: 8px;
    background: #334155;
  }

  .viewport {
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .vh   { height: 100vh; background: #7c3aed; }
  .svh  { height: 100svh; background: #0369a1; }
  .lvh  { height: 100lvh; background: #047857; }
  .dvh  { height: 100dvh; background: #b45309; }

  .inside {
    padding: 12px;
    font-size: 13px;
    overflow: auto;
    flex: 1;
  }

  .bottom {
    padding: 10px;
    background: #0008;
    font-weight: bold;
    text-align: center;
    flex-shrink: 0;
  }

  .metrics {
    background: #1f2937;
    padding: 12px;
    border-radius: 8px;
    font-family: monospace;
    font-size: 12px;
    line-height: 1.8;
    overflow-wrap: anywhere;
  }

  button {
    background: #2563eb;
    border: 0;
    color: white;
    border-radius: 6px;
    padding: 10px 14px;
    margin: 4px;
    font-size: 14px;
  }

  #log {
    max-height: 180px;
    overflow: auto;
    font-size: 11px;
    white-space: pre-wrap;
    background: #020617;
    padding: 10px;
  }

  .spacer {
    height: 40vh;
    background: #1e293b;
    display: grid;
    place-items: center;
    color: #94a3b8;
  }
</style>
</head>

<body>

<h1>Mobile Viewport Height Test</h1>
<p class="info">
  Scroll the page to hide/show browser navigation bars.
  Compare the four viewport units.
</p>

<div class="metrics" id="metrics">
  Measuring...
</div>

<button onclick="update()">Refresh measurements</button>
<button onclick="clearLog()">Clear log</button>

<section class="test">
  <h2>100vh — Legacy viewport</h2>
  <div class="viewport vh">
    <div class="inside">
      100vh<br>
      <br>
      Does this extend behind the browser navigation bar?
    </div>
    <div class="bottom">100vh BOTTOM</div>
  </div>
</section>

<section class="test">
  <h2>100svh — Small viewport</h2>
  <div class="viewport svh">
    <div class="inside">
      100svh<br><br>
      Represents the viewport with browser UI expanded.
    </div>
    <div class="bottom">100svh BOTTOM</div>
  </div>
</section>

<section class="test">
  <h2>100lvh — Large viewport</h2>
  <div class="viewport lvh">
    <div class="inside">
      100lvh<br><br>
      Represents the viewport with browser UI retracted.
    </div>
    <div class="bottom">100lvh BOTTOM</div>
  </div>
</section>

<section class="test">
  <h2>100dvh — Dynamic viewport</h2>
  <div class="viewport dvh">
    <div class="inside">
      100dvh<br><br>
      Should dynamically adapt to browser UI changes.
    </div>
    <div class="bottom">100dvh BOTTOM</div>
  </div>
</section>

<div class="spacer">
  Scroll area — trigger browser navigation bar changes
</div>

<h2>Resize Event Log</h2>
<div id="log"></div>

<script>
const metrics = document.getElementById("metrics");
const log = document.getElementById("log");

function update() {
  const vv = window.visualViewport;

  const data = {
    innerHeight: window.innerHeight,
    outerHeight: window.outerHeight,
    clientHeight: document.documentElement.clientHeight,
    visualViewportHeight: vv?.height,
    visualViewportOffsetTop: vv?.offsetTop,
    visualViewportScale: vv?.scale,
    screenHeight: screen.height,
    dpr: devicePixelRatio,
    scrollY: window.scrollY,
    vh: window.innerHeight,
    css100vh: cssValue("100vh"),
    css100svh: cssValue("100svh"),
    css100lvh: cssValue("100lvh"),
    css100dvh: cssValue("100dvh")
  };

  metrics.innerHTML = Object.entries(data)
    .map(([key, value]) =>
      `${key}: <strong>${value ?? "unsupported"}</strong>`
    ).join("<br>");
}

function cssValue(value) {
  const el = document.createElement("div");
  el.style.cssText = `
    position: absolute;
    height: ${value};
    width: 1px;
    visibility: hidden;
  `;
  document.body.appendChild(el);
  const height = el.getBoundingClientRect().height;
  el.remove();
  return height.toFixed(2) + "px";
}

function addLog(event) {
  const vv = window.visualViewport;
  const line =
    `${new Date().toLocaleTimeString()} ${event}\n` +
    `innerHeight=${innerHeight}, ` +
    `visualViewport=${vv?.height?.toFixed(2)}, ` +
    `scrollY=${scrollY}\n`;

  log.textContent = line + log.textContent;
}

function clearLog() {
  log.textContent = "";
}

window.addEventListener("resize", () => {
  update();
  addLog("window.resize");
});

window.addEventListener("scroll", () => {
  update();
}, { passive: true });

window.visualViewport?.addEventListener("resize", () => {
  update();
  addLog("visualViewport.resize");
});

window.visualViewport?.addEventListener("scroll", () => {
  addLog("visualViewport.scroll");
});

update();
addLog("initial");
</script>

</body>
</html>

```

## **How to test**

1. Open the HTML page directly in mobile Safari or Chrome.
2. Start at the top with the browser navigation bar expanded.
3. Scroll down to collapse the navigation bar.
4. Scroll back up to expand it.
5. Compare the measurements and bottom labels.

## **Expected behavior**

| Unit     | Browser UI expanded          | Browser UI collapsed         |
| -------- | ---------------------------- | ---------------------------- |
| `100vh`  | Usually large viewport       | Usually unchanged            |
| `100svh` | Small viewport               | Unchanged                    |
| `100lvh` | Large viewport               | Unchanged                    |
| `100dvh` | Adapts to available viewport | Adapts to available viewport |

**Important:** Browser behavior varies by OS and browser version. In particular, `100dvh` updates may not happen synchronously with every navigation-bar animation frame.

This test is useful for investigating differences between iOS Safari, Android Chrome, and WebViews.
