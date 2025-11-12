import requests
import time

def check_images():
    # Constants defined at the top
    timestamp = 1744618643820
    page = 5

    # Headers to mimic a real browser
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'DNT': '1',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Cache-Control': 'max-age=0',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    session = requests.Session()
    session.headers.update(headers)

    current_timestamp = timestamp
    current_page = page
    successful_urls = []

    while True:
        consecutive_404s = 0
        found_for_current_page = False

        print(f"Checking page {current_page} starting from timestamp {current_timestamp}")

        # Check timestamps for current page
        while consecutive_404s < 300:
            url = f"https://img-preview.51jiaoxi.com/3/7/16881814/0-{current_timestamp}/{current_page}.jpg"

            try:
                response = session.get(url, timeout=10)

                if response.status_code != 404:
                    # Success - found a non-404 response
                    successful_urls.append(url)
                    print(f"Found: {url}")
                    found_for_current_page = True
                    consecutive_404s = 0  # Reset counter
                    break
                else:
                    consecutive_404s += 1

            except requests.exceptions.RequestException as e:
                # On error, count as 404 and continue
                consecutive_404s += 1

            # Increment timestamp and wait
            current_timestamp += 1
            time.sleep(0.01)

        if not found_for_current_page:
            print(f"No non-404 found for page {current_page} after 300 attempts")
            break

        # Move to next page, continue from the last successful timestamp
        current_page += 1

    # Output all successful URLs
    print("\n=== SUCCESSFUL URLs ===")
    for url in successful_urls:
        print(url)

if __name__ == "__main__":
    check_images()