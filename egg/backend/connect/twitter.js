// twitter.js
import { log } from "../log.js";

/**
 * wait — wait for articles to appear
 * @param {object} params
 * @param {import("puppeteer").Page} params.page
 */
export const wait = async ({ page }) => {
  await page.waitForSelector("article", { timeout: 30000 });
};

/**
 * read — read tweets from current page
 * @param {object} params
 * @param {import("puppeteer").Page} params.page
 * @param {string} params.profile
 * @returns {Promise<Array<object>>}
 */
export const read = async ({ page, profile }) => {
  await wait({ page });

  const data = await page.evaluate(() => {
    return Array.from(document.querySelectorAll("article")).map(article => {
      const readAt = new Date().toISOString();

      const repost =
        article
          .querySelector('[data-testid="socialContext"]')
          ?.innerText.replace(/\s+/g, " ")
          .trim() || null;

      const mainUserBlock = article.querySelector(
        ':scope [data-testid="User-Name"]'
      );

      const userName = mainUserBlock
        ? mainUserBlock.querySelector("span span")?.innerText || null
        : null;

      const handle = mainUserBlock
        ? Array.from(mainUserBlock.querySelectorAll("span"))
            .find(el => el.innerText.startsWith("@"))
            ?.innerText || null
        : null;

      const verified = !!mainUserBlock?.querySelector(
        '[data-testid="icon-verified"]'
      );

      const timeEl = article.querySelector(":scope time");

      const timestampISO = timeEl?.getAttribute("datetime") || null;
      const timestampLabel = timeEl?.innerText || null;

      const tweetLink = timeEl?.closest("a")?.href || null;
      const tweetId =
        tweetLink?.split("/status/")[1]?.split("/")[0] || null;

      const textContainer = article.querySelector(
        ':scope [data-testid="tweetText"]'
      );

      const content = textContainer
        ? textContainer.innerText.trim()
        : null;

      const images = Array.from(
        article.querySelectorAll(
          ':scope [data-testid="tweetPhoto"] img'
        )
      ).map(img => img.src);

      const videoPoster =
        article.querySelector(":scope video")?.getAttribute("poster") || null;

      const metricsLabel =
        article
          .querySelector(':scope [role="group"]')
          ?.getAttribute("aria-label") || "";

      const metrics = {
        replies: metricsLabel.match(/(\d+)\s+repl/i)?.[1] || "0",
        reposts: metricsLabel.match(/(\d+)\s+repost/i)?.[1] || "0",
        likes: metricsLabel.match(/(\d+)\s+like/i)?.[1] || "0",
        views:
          metricsLabel.match(/(\d+[\d,K\.]*)\s+view/i)?.[1] || "0"
      };

      return {
        readAt,
        repost,
        userName,
        handle,
        verified,
        tweetId,
        timestampISO,
        timestampLabel,
        content,
        images,
        videoPoster,
        metrics
      };
    });
  });

  await log({
    message: `twitter read ${data.length} items (${profile})`
  });

  return data;
};
