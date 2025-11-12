# 1

write a python request script to iterate https://img-preview.51jiaoxi.com/3/7/16881814/0-x/5.jpg while x start from 1744618643820, adding 1 each time, until not 404

---

Here's a Python script that iterates through the URLs by incrementing the `x` parameter until it encounters a non-404 response:

```python
import requests

def check_images():
    base_url = "https://img-preview.51jiaoxi.com/3/7/16881814/0-{}/5.jpg"
    x = 1744618643820

    while True:
        url = base_url.format(x)
        try:
            response = requests.get(url, timeout=5)
            print(f"x={x}: Status Code {response.status_code}")

            if response.status_code != 404:
                print(f"Found non-404 response at x={x}")
                print(f"URL: {url}")
                break

        except requests.exceptions.RequestException as e:
            print(f"x={x}: Error - {e}")
            break

        x += 1

if __name__ == "__main__":
    check_images()
```

Key features of this script:

1. Starts at `x = 1744618643820` and increments by 1 each iteration
2. Uses a timeout of 5 seconds for each request
3. Prints the status code for each attempt
4. Stops when it encounters any status code other than 404
5. Handles network errors gracefully
6. Shows the final successful URL when found

To use this script:

1. Make sure you have the requests library installed (`pip install requests`)
2. Run the script
3. It will automatically stop when it finds a non-404 response

Note: The script will make consecutive requests to the server. Use responsibly and consider adding delays if you need to avoid overwhelming the server. You can add a delay by including `time.sleep(0.1)` (after importing the time module) inside the loop if needed.

# 2

add header to prevent bot detection

---

Here's the updated Python script with headers to mimic a browser and prevent bot detection:

```python
import requests
import time
import random

def check_images():
    base_url = "https://img-preview.51jiaoxi.com/3/7/16881814/0-{}/5.jpg"
    x = 1744618643820

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

    while True:
        url = base_url.format(x)
        try:
            # Add random delay between requests (1-3 seconds)
            time.sleep(random.uniform(1, 3))

            response = session.get(url, timeout=10)
            print(f"x={x}: Status Code {response.status_code}")

            if response.status_code != 404:
                print(f"Found non-404 response at x={x}")
                print(f"URL: {url}")

                # If we get a 200, we might want to save the image
                if response.status_code == 200:
                    content_type = response.headers.get('Content-Type', '')
                    if 'image' in content_type:
                        print(f"Image found! Content-Type: {content_type}")
                        # Optionally save the image
                        # with open(f'image_{x}.jpg', 'wb') as f:
                        #     f.write(response.content)
                break

        except requests.exceptions.RequestException as e:
            print(f"x={x}: Error - {e}")
            # On error, wait longer and retry with the same x
            time.sleep(5)
            continue

        x += 1

if __name__ == "__main__":
    check_images()
```

Additional anti-detection features added:

1. **Realistic Headers**:

   - Common browser User-Agent (Chrome on Windows)
   - Accept headers for various content types
   - Security headers (Sec-Fetch-\*, sec-ch-ua)
   - DNT (Do Not Track) header

2. **Session Management**: Uses `requests.Session()` to maintain consistent headers and connection

3. **Random Delays**:

   - 1-3 second random delay between requests
   - Longer 5-second delay on errors

4. **Realistic Behavior**:

   - Mimics browser navigation patterns
   - Includes common browser security headers

5. **Error Handling**: Continues on errors with longer delay

6. **Content Validation**: Checks if the response is actually an image when status is 200

You can further enhance this by:

- Adding referrer headers that point to related domains
- Using a pool of different User-Agents
- Implementing proxy rotation if needed
- Adding more sophisticated delay patterns

Remember to use this responsibly and respect the website's `robots.txt` and terms of service.

# 3

change the interval to 0.01 and make the x and y on https://img-preview.51jiaoxi.com/3/7/16881814/0-x/y.jpg constant on top of the file, with x named timestamp, y named page.

---

Here's the updated Python script with the requested changes:

```python
import requests
import time

def check_images():
    # Constants defined at the top
    timestamp = 1744618643820
    page = 5

    base_url = f"https://img-preview.51jiaoxi.com/3/7/16881814/0-{timestamp}/{page}.jpg"

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

    while True:
        # Update the URL with current timestamp (x) and constant page (y)
        url = f"https://img-preview.51jiaoxi.com/3/7/16881814/0-{current_timestamp}/{page}.jpg"

        try:
            response = session.get(url, timeout=10)
            print(f"timestamp={current_timestamp}: Status Code {response.status_code}")

            if response.status_code != 404:
                print(f"Found non-404 response at timestamp={current_timestamp}")
                print(f"URL: {url}")

                # If we get a 200, we might want to save the image
                if response.status_code == 200:
                    content_type = response.headers.get('Content-Type', '')
                    if 'image' in content_type:
                        print(f"Image found! Content-Type: {content_type}")
                        # Optionally save the image
                        # with open(f'image_{current_timestamp}.jpg', 'wb') as f:
                        #     f.write(response.content)
                break

        except requests.exceptions.RequestException as e:
            print(f"timestamp={current_timestamp}: Error - {e}")
            # On error, wait and continue with next timestamp
            time.sleep(0.01)
            current_timestamp += 1
            continue

        # Fixed interval of 0.01 seconds
        time.sleep(0.01)
        current_timestamp += 1

if __name__ == "__main__":
    check_images()
```

Key changes made:

1. **Constants at the top**:

   - `timestamp = 1744618643820` (starting value for x)
   - `page = 5` (constant value for y)

2. **0.01 second interval**: Reduced the delay between requests to 0.01 seconds as requested

3. **Clear variable naming**:

   - `timestamp` represents the x parameter (incremented each iteration)
   - `page` represents the y parameter (constant value)

4. **Updated URL construction**: The URL now uses the format with timestamp (x) and page (y) as specified

The script will:

- Start with timestamp = 1744618643820 and page = 5
- Increment timestamp by 1 each iteration
- Keep page constant at 5
- Use a 0.01 second delay between requests
- Stop when it finds a non-404 response

Note: With a 0.01 second interval, you'll be making 100 requests per second. Please ensure this rate is acceptable according to the website's terms of service and robots.txt file.

# 4

iterate from page, after succeeding in finding non 404 page, let page + 1, starting from the updated timestamp. consider failure as a consecutive 404 of 300 times. only output the urls of all succeeded ones.

---

Here's the updated Python script that iterates through pages, uses consecutive 404 failure detection, and only outputs successful URLs:

```python
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
```

Key features of this script:

1. **Page-based iteration**:

   - Starts with page 5
   - After finding a successful URL for current page, increments page by 1
   - Continues with the updated timestamp for the next page

2. **Failure detection**:

   - Stops searching for current page after 300 consecutive 404s
   - Network errors are treated as 404s for counting purposes

3. **Output**:

   - Only outputs successful URLs at the end
   - Shows progress during execution but only prints all successful URLs in the final summary

4. **Efficient searching**:
   - Uses 0.01 second interval between requests
   - Maintains session for performance
   - Continues from last successful timestamp when moving to next page

The script will:

- Search for valid images page by page
- For each page, try up to 300 consecutive timestamps
- If no valid image is found after 300 attempts, stop completely
- Collect and display all successful URLs at the end

This approach ensures you find all available images across multiple pages while efficiently handling failures.
