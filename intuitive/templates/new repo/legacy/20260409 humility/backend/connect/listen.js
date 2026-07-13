export async function wait_for_sse(page, url_pattern, match_fn) {
  return new Promise((resolve, reject) => {
    const events_acc = [];

    const on_response = async (response) => {
      try {
        const url = response.url();
        const headers = response.headers();

        if (!url_pattern.test(url)) return;
        if (!headers["content-type"]?.includes("text/event-stream")) return;

        page.off("response", on_response);

        const body = await response.body();
        const text = body.toString("utf8");

        const events = text.split("\n\n");

        for (const event of events) {
          events_acc.push(event);       // accumulate
          if (match_fn(event)) {
            resolve(events_acc.join("\n\n")); // return all
            return;
          }
        }
      } catch (err) {
        reject(err);
      }
    };

    page.on("response", on_response);
  });
}