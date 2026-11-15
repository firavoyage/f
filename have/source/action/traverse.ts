import * as cheerio from 'cheerio'
import { append } from 'lib/file'
import { log_file, serialize } from 'action/index'
import { format_log } from 'lib/log'

export type traverse_options = {
  should_visit?: (url: string) => boolean
  max_depth?: number
  max_page_count?: number
  max_duration?: number
  interval?: number
}

export async function traverse(
  fetch: (url: string) => Promise<string>,
  url: string,
  options: traverse_options = {},
): Promise<void> {
  const {
    should_visit = (candidate_url) => {
      try {
        return new URL(candidate_url).origin === new URL(url).origin
      } catch {
        return false
      }
    },
    max_depth = Infinity,
    max_page_count = Infinity,
    max_duration = Infinity,
    interval = 1,
  } = options

  const normalize_url = (value: string): string => {
    const parsed_url = new URL(value)
    parsed_url.hash = ''
    return parsed_url.href
  }

  const initial_url = normalize_url(url)
  const start_time = Date.now()

  const queue: Array<{ url: string; depth: number }> = [
    { url: initial_url, depth: 0 },
  ]

  const visited = new Set<string>()
  let page_count = 0

  const log = (message: string, details?: unknown, level = 'info' as 'info' | 'warn' | 'error'): void => {
    append(
      log_file,
      format_log(`[traverse] ${message}\n${serialize(details)}`, level),
    )
    // if (details !== undefined) {
    //   console.log(`[traverse] ${message}`, details)
    // } else {
    //   console.log(`[traverse] ${message}`)
    // }
  }

  const is_expired = (): boolean => {
    return (Date.now() - start_time) / 1000 >= max_duration
  }

  log('Starting traversal', {
    initial_url,
    max_depth,
    max_page_count,
    max_duration,
    interval,
  })

  while (queue.length > 0 && page_count < max_page_count && !is_expired()) {
    const current = queue.shift()!

    if (visited.has(current.url)) {
      continue
    }

    if (!should_visit(current.url)) {
      log('Skipping URL (should_visit returned false)', current.url)
      continue
    }

    if (current.depth > max_depth) {
      log('Skipping URL (max depth exceeded)', current.url)
      continue
    }

    visited.add(current.url)

    log('Fetching page', {
      url: current.url,
      depth: current.depth,
      page_count: page_count + 1,
    })

    try {
      const html = await fetch(current.url)
      page_count++

      log('Fetched page successfully', {
        url: current.url,
        html_length: html.length,
      })

      const $ = cheerio.load(html)

      if (current.depth >= max_depth) {
        log('Maximum depth reached; not discovering child links', current.url)
        continue
      }

      const links = new Set<string>()

      $('a[href]').each((_, element) => {
        const href = $(element).attr('href')

        if (!href) {
          return
        }

        try {
          const candidate_url = normalize_url(new URL(href, current.url).href)

          if (
            !visited.has(candidate_url) &&
            !links.has(candidate_url) &&
            should_visit(candidate_url)
          ) {
            links.add(candidate_url)
          }
        } catch {
          log('Ignoring invalid link', href)
        }
      })

      log('Discovered links', {
        url: current.url,
        count: links.size,
      })

      for (const link of links) {
        queue.push({
          url: link,
          depth: current.depth + 1,
        })
      }
    } catch (error) {
      log('Failed to fetch or parse page', {
        url: current.url,
        error,
      }, 'error')
    }

    if (
      queue.length > 0 &&
      page_count < max_page_count &&
      !is_expired() &&
      interval > 0
    ) {
      await new Promise((resolve) => setTimeout(resolve, interval * 1000))
    }
  }

  log('Traversal completed', {
    visited_count: visited.size,
    page_count,
    remaining_queue: queue.length,
    elapsed_seconds: (Date.now() - start_time) / 1000,
    stopped_by: is_expired()
      ? 'max_duration'
      : page_count >= max_page_count
      ? 'max_page_count'
      : 'queue_exhausted',
  })
}
