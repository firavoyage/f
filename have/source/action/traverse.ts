import { load } from "cheerio";

export type html_fetcher = (url: string) => Promise<string>;

export interface traverse_options {
  should_visit_url?: (url: string) => boolean | Promise<boolean>;
  max_depth?: number;
  max_page_count?: number;
  max_duration_secs?: number;
  interval_secs?: number;
}

export interface traversed_page {
  url: string;
  depth: number;
  html: string;
}

export interface traversal_error {
  url: string;
  depth: number;
  error: unknown;
}

export interface traverse_result {
  pages: traversed_page[];
  errors: traversal_error[];
  stop_reason: "queue_empty" | "max_page_count" | "max_duration";
}

interface queue_item {
  url: string;
  depth: number;
}

function normalize_http_url(
  value: string,
  base_url?: string,
): string | null {
  try {
    const parsed_url = new URL(value, base_url);

    if (
      parsed_url.protocol !== "http:" &&
      parsed_url.protocol !== "https:"
    ) {
      return null;
    }

    // Fragments do not identify different pages.
    parsed_url.hash = "";

    return parsed_url.href;
  } catch {
    return null;
  }
}

function validate_limit(
  name: string,
  value: number,
  allow_infinity: boolean,
  require_integer = false,
): void {
  if (
    (allow_infinity && value === Infinity) ||
    (
      Number.isFinite(value) &&
      value >= 0 &&
      (!require_integer || Number.isInteger(value))
    )
  ) {
    return;
  }

  throw new RangeError(
    `${name} must be a non-negative ${
      require_integer ? "integer" : "number"
    }${allow_infinity ? " or Infinity" : ""}`,
  );
}

function delay(milliseconds: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export async function traverse(
  fetch: html_fetcher,
  url: string,
  options: traverse_options = {},
): Promise<traverse_result> {
  const initial_url = normalize_http_url(url);

  if (!initial_url) {
    throw new Error("url must be an absolute HTTP(S) URL");
  }

  const max_depth = options.max_depth ?? Infinity;
  const max_page_count = options.max_page_count ?? Infinity;
  const max_duration_secs = options.max_duration_secs ?? Infinity;
  const interval_secs = options.interval_secs ?? 1;

  validate_limit("max_depth", max_depth, true, true);
  validate_limit("max_page_count", max_page_count, true, true);
  validate_limit("max_duration_secs", max_duration_secs, true);
  validate_limit("interval_secs", interval_secs, false);

  const initial_origin = new URL(initial_url).origin;

  // Default policy: visit only URLs on the initial site's origin.
  const should_visit_url =
    options.should_visit_url ??
    ((candidate_url: string) =>
      new URL(candidate_url).origin === initial_origin);

  // FIFO queue guarantees breadth-first traversal.
  const queue: queue_item[] = [
    { url: initial_url, depth: 0 },
  ];

  let queue_index = 0;
  let attempted_page_count = 0;
  let last_fetch_finished_at: number | undefined;

  // Mark URLs when considered, preventing duplicate scheduling.
  const considered_urls = new Set<string>([initial_url]);

  const pages: traversed_page[] = [];
  const errors: traversal_error[] = [];

  const start_time = Date.now();

  const duration_exceeded = () =>
    (Date.now() - start_time) / 1000 >= max_duration_secs;

  let stop_reason: traverse_result["stop_reason"] = "queue_empty";

  while (queue_index < queue.length) {
    // Enforce page limit.
    if (attempted_page_count >= max_page_count) {
      stop_reason = "max_page_count";
      break;
    }

    // Enforce duration limit.
    if (duration_exceeded()) {
      stop_reason = "max_duration";
      break;
    }

    // Wait between fetches, not before the initial fetch.
    if (last_fetch_finished_at !== undefined) {
      const elapsed_ms = Date.now() - last_fetch_finished_at;
      const remaining_ms = interval_secs * 1000 - elapsed_ms;

      if (remaining_ms > 0) {
        await delay(remaining_ms);
      }

      if (duration_exceeded()) {
        stop_reason = "max_duration";
        break;
      }
    }

    const current_item = queue[queue_index++];
    const current_url = current_item.url;
    const current_depth = current_item.depth;

    attempted_page_count++;

    let html: string;

    // Fetch failures are recorded without aborting the traversal.
    try {
      html = await fetch(current_url);
    } catch (error) {
      last_fetch_finished_at = Date.now();

      errors.push({
        url: current_url,
        depth: current_depth,
        error,
      });

      continue;
    }

    last_fetch_finished_at = Date.now();

    pages.push({
      url: current_url,
      depth: current_depth,
      html,
    });

    // Do not discover children beyond the depth limit.
    if (current_depth >= max_depth) {
      continue;
    }

    const $ = load(html);

    // Respect an HTML <base href="..."> when resolving relative links.
    let link_base_url = current_url;
    const base_href = $("base[href]").first().attr("href");

    if (base_href) {
      link_base_url =
        normalize_http_url(base_href, current_url) ?? current_url;
    }

    // Extract navigational links in document order.
    const links = $("a[href], area[href]").toArray();

    for (const element of links) {
      if (duration_exceeded()) {
        stop_reason = "max_duration";
        break;
      }

      const href = $(element).attr("href");

      if (href === undefined) {
        continue;
      }

      const next_url = normalize_http_url(
        href.trim(),
        link_base_url,
      );

      if (!next_url || considered_urls.has(next_url)) {
        continue;
      }

      considered_urls.add(next_url);

      const next_depth = current_depth + 1;

      if (next_depth > max_depth) {
        continue;
      }

      // Await each decision before processing the next link.
      if (!(await should_visit_url(next_url))) {
        continue;
      }

      if (duration_exceeded()) {
        stop_reason = "max_duration";
        break;
      }

      queue.push({
        url: next_url,
        depth: next_depth,
      });
    }

    if (stop_reason === "max_duration") {
      break;
    }
  }

  return {
    pages,
    errors,
    stop_reason,
  };
}