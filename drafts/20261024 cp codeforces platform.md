# does it submit the latest file if i select a file on codeforces web, submit, navigate back, and see the file still there, or do i need to choose file again

**Yes, it will typically submit the latest saved version of the file on your disk**, but relying on this behavior can be risky depending on your browser.

When you navigate back and see the filename still populated in the "Choose File" field, the browser is maintaining a reference link to that file on your local file system. When you click **Submit** again, the browser reads the file from your disk at that exact moment, meaning any updates you saved after the first submission will be included.

However, there are important caveats to keep in mind to avoid accidental wrong submissions:

### ⚠️ Potential Risks with Navigating Back

* **Permission Losses:** Some browsers (especially strict or updated versions of Chrome and Firefox) will clear the file handle or block the upload for security reasons when navigating via the back button. This can cause the form to submit an **empty file** or a cached, outdated version.
* **Wrong Problem Selection:** When you navigate back, the page state might revert to a previous problem index if you aren't careful, leading you to submit code to the wrong problem.

### 💡 Better Alternatives for Frictionless Submissions

To avoid having to repeatedly click "Choose File" or worry about browser back-button bugs, consider these common Codeforces workflows:

* **Use the Toggle to Paste Code:** Click the toggle button on the submission page to switch from "File" to **"Source code"**. You can then simply use `Ctrl+A` \-> `Ctrl+C` in your IDE and `Ctrl+V` into the browser box. Hitting the back button will still keep your old code there, but you can quickly overwrite it.
* **Submit directly from the Problem Page:** Instead of using the main navigation bar's "Submit" tab, use the sidebar submission box directly on the problem's page.
* **Use a CLI Tool:** Most competitive programmers completely bypass the web UI using tools like CF-Tool or Competitive Companion combined with an editor extension to submit files directly from the terminal or IDE with a single shortcut.

Are you running into an issue where **blank files** or **old compilation errors** are being submitted? If you want, I can help you set up a **command-line tool** or an **IDE extension** so you never have to manually upload files on the site again.

# does codeforces web use websockets

**Yes, Codeforces uses WebSockets** to power its real-time web features. [](https://codeforces.com/blog/entry/6389?locale=en)

The platform adopted WebSockets years ago to handle live data updates efficiently. Instead of relying on constant server polling (which strains infrastructure and introduces lag), Codeforces uses persistent, bidirectional connections. [](https://www.youtube.com/watch?v=AxGKI9AtdsA&t=35)

### Where Codeforces Uses WebSockets

You will primarily notice WebSockets active during live events and dynamic pages on the Codeforces platform:

* **Live Standings & Leaderboards:** Rankings, scores, and hacking attempts update instantly during active contests.
* **Submission Status:** When you submit a solution, the verdict status (e.g., _In Queue_, _Running on test 1_, _Accepted_) updates on your dashboard in real time without refreshing the page. [](https://codeforces.com/blog/entry/62647)

### Why This Matters

By utilizing the WebSocket protocol, Codeforces can immediately push updates from its backend testing queues straight to your browser. This minimizes network overhead and ensures low latency, which is critical during high-traffic competitive programming contests where every second counts. [](https://www.youtube.com/watch?v=vuezTFo4kRE&t=37)

Are you asking because you are trying to **build an extension** or **scrape submission data** from Codeforces, or are you just curious about their system architecture?

* [](https://codeforces.com/blog/entry/62647)  
Codeforces  
A browser extension that says the result of your submission as ...  
Codeforces parses the my submissions page. Codeforces uses websocket connection and I couldn't figure out what the packets were do...
* [](https://www.youtube.com/watch?v=AxGKI9AtdsA&t=35)  
YouTube·Technical Rajni  
🚀 What is WebSocket? 🔌 Real-Time Magic vs HTTP 🌐💥  
Jun 25, 2025 — WebSocket offers low latency and efficient data exchange by avoiding HTTP overhead and reducing server load.  
1m
* [](https://www.youtube.com/watch?v=vuezTFo4kRE&t=37)  
YouTube·The Coding Gopher  
99% of Developers Don't Get WebSockets  
Jun 15, 2026 — WebSockets offer a permanent, two-way communication channel between users and servers, unlike traditional HTTP which operates in a...  
9m

Show all
