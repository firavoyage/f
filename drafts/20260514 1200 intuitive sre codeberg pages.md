# .

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="5;url=/">
    <title>humility</title>
</head>
<body>
    <p>humility</p>
    <p><script>document.write(window.location.href);</script></p>
</body>
</html>
```

#

write a 404 page for codeberg pages. redirect everything. print the current url. no styling.

html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="5;url=/">
    <title>404 Not Found</title>
</head>
<body>
    <h1>404 Not Found</h1>
    <p>The requested URL was not found on this Codeberg Pages site.</p>
    <p>Current URL: <script>document.write(window.location.href);</script></p>
    <p>Redirecting to the home page in 5 seconds...</p>
</body>
</html>
```

Use code with caution.

Would you like to **adjust the redirect timer** or **change the destination URL** from the home page to a specific directory?

where to put it

To make Codeberg Pages use your custom 404 page, place the file in the following location:

- **File Name**: Must be named exactly `404.html`.
- **Directory**: Place it in the **root directory** of your repository.
- **Branch**: Push it to your default branch (usually `main`).

Would you like help setting up an **automatic redirect without a timer** using JavaScript, or instructions on how to **test the page locally** before pushing?

fact check

According to the [official Codeberg Pages Advanced Usage documentation](https://docs.codeberg.org/codeberg-pages/advanced-usage/), the provided instructions are highly accurate, with one critical branch configuration requirement to ensure it works properly:

- **File Name**: Must be named exactly `404.html`.
- **File Location**: Must sit in the **root directory** of your repository.
- **The Branch Target**: Codeberg Pages serves content depending on your active repository settings. By default, it targets the `pages` branch or your main branch. If your site doesn't update, verify your active publishing branch under your repository settings. \[[1](https://docs.codeberg.org/codeberg-pages/advanced-usage/), [2](https://codeberg.org/Codeberg/Community/issues/2143)]

Code Execution Behavior

- **No Styling**: The provided HTML uses basic semantic elements (, ) and features zero inline styles or external CSS sheets, strictly fulfilling your "no styling" request.

- **Current URL Printing**: The document uses `window.location.href` inside a standard client-side tag. Because Codeberg Pages processes 404 targets client-side without altering the browser's address bar, this code accurately captures and prints the exact broken URL the user attempted to visit.

- **Redirection**: The tag handles the catch-all redirect natively. It forwards any broken URL path back to your root homepage (`/`) after a 5-second delay.

- [link](https://docs.codeberg.org/codeberg-pages/advanced-usage/)\
  Advanced usage | Codeberg Documentation\
  Custom error page for 404s. You can replace the default 404 error page that Codeberg Pages will show for missing pages with your o...\
  Codeberg Documentation

- [link](https://codeberg.org/Codeberg/Community/issues/2143)\
  Codeberg Pages site returns 404 despite page existing in git ...\
  \### Comment Every webpage within the "cgd" directory of my live Codeberg Pages website returns a 404 error when accessed. This hap...\
  Codeberg.org
