import * as cheerio from "cheerio";

export async function traverse(fetch, url, options = {}) {
  const {
    should_visit = (target_url, current_url) =>
      new URL(target_url).origin === new URL(url).origin,
    max_depth = Infinity,
    max_page_count = Infinity,
    max_duration = Infinity,
    interval = 1,
  } = options;

  const start_time = Date.now();
  const visited = new Set();
  const results = [];
  const queue = [{ url: new URL(url).href, depth: 0 }];

  const sleep = (seconds) =>
    new Promise((resolve) => setTimeout(resolve, seconds * 1000));

  while (queue.length > 0) {
    if (results.length >= max_page_count) break;
    if ((Date.now() - start_time) / 1000 >= max_duration) break;

    const current = queue.shift();
    const current_url = current.url;

    if (visited.has(current_url)) continue;
    visited.add(current_url);

    let html;

    try {
      html = await fetch(current_url);
    } catch (error) {
      results.push({
        url: current_url,
        depth: current.depth,
        error,
      });
      continue;
    }

    results.push({
      url: current_url,
      depth: current.depth,
      html,
    });

    if (current.depth >= max_depth) continue;

    const $ = cheerio.load(html);
    const links = $("a[href]")
      .map((_, element) => $(element).attr("href"))
      .get();

    for (const href of links) {
      let target_url;

      try {
        const parsed_url = new URL(href, current_url);

        if (!["http:", "https:"].includes(parsed_url.protocol)) {
          continue;
        }

        parsed_url.hash = "";
        target_url = parsed_url.href;
      } catch {
        continue;
      }

      if (visited.has(target_url)) continue;
      if (queue.some((item) => item.url === target_url)) continue;

      let allowed = false;

      try {
        allowed = await should_visit(target_url, current_url);
      } catch {
        continue;
      }

      if (allowed) {
        queue.push({
          url: target_url,
          depth: current.depth + 1,
        });
      }
    }

    if (queue.length > 0 && interval > 0) {
      await sleep(interval);
    }
  }

  return results;
}
