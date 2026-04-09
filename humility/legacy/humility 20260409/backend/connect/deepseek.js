// wip

export function convert_deepseek(event_stream) {
  const json = JSON;
  const lines = String(event_stream).split(/\r?\n/);

  // state
  const response_fragments = [];
  let last_fragment_index = -1;

  const append_to_last_fragment = (text) => {
    if (
      last_fragment_index < 0 ||
      last_fragment_index >= response_fragments.length
    ) {
      // create a default fragment if none exists
      response_fragments.push({
        id: response_fragments.length ? response_fragments.length : 0,
        type: "RESPONSE",
        content: String(text),
      });
      last_fragment_index = response_fragments.length - 1;
      return;
    }
    const frag = response_fragments[last_fragment_index];
    frag.content = (frag.content || "") + String(text);
  };

  for (const raw_line of lines) {
    const line = raw_line.trim();
    if (!line.startsWith("data:")) continue;

    const payload_text = raw_line.replace(/^\s*data:\s*/, "");
    if (!payload_text) continue;

    let payload;
    try {
      payload = json.parse(payload_text);
    } catch {
      // ignore non-json data
      continue;
    }

    // Case: simple streaming string chunks like { "v": "text" }
    if (
      payload &&
      Object.prototype.hasOwnProperty.call(payload, "v") &&
      typeof payload.v === "string" &&
      Object.keys(payload).length === 1
    ) {
      append_to_last_fragment(payload.v);
      continue;
    }

    // Case: wrapper with v.response (initial response object)
    if (payload && payload.v && payload.v.response) {
      const resp = payload.v.response;
      if (Array.isArray(resp.fragments) && resp.fragments.length) {
        // copy fragments
        response_fragments.length = 0;
        for (const f of resp.fragments) {
          response_fragments.push({
            id: f.id ?? response_fragments.length,
            type: f.type ?? "RESPONSE",
            content: f.content ?? "",
          });
        }
        last_fragment_index = response_fragments.length - 1;
      }
      continue;
    }

    // Case: batched response operations
    if (
      payload &&
      payload.p === "response" &&
      payload.o === "BATCH" &&
      Array.isArray(payload.v)
    ) {
      const batch = payload.v;
      const has_content_filter = batch.some(
        (item) => item && item.p === "status" && item.v === "CONTENT_FILTER"
      );

      for (const item of batch) {
        if (!item || typeof item !== "object") continue;

        // fragments replacement/append in batch
        if (item.p === "fragments") {
          if (has_content_filter) {
            // ignore fragments updates when CONTENT_FILTER present
            continue;
          }
          if (Array.isArray(item.v)) {
            // replace whole fragments array
            response_fragments.length = 0;
            for (const f of item.v) {
              response_fragments.push({
                id: f.id ?? response_fragments.length,
                type: f.type ?? "RESPONSE",
                content: f.content ?? "",
              });
            }
            last_fragment_index = response_fragments.length - 1;
          }
        }

        // other batch ops we only care about for content-appends
        if (
          item.p &&
          String(item.p).startsWith("response/fragments") &&
          item.o === "APPEND" &&
          Object.prototype.hasOwnProperty.call(item, "v")
        ) {
          // typically path like response/fragments/-1/content
          append_to_last_fragment(item.v);
        }

        // p === 'response' nested object carrying fragments etc (rare)
        if (
          item.p === "response" &&
          item.v &&
          item.v.fragments &&
          Array.isArray(item.v.fragments)
        ) {
          if (has_content_filter) continue;
          response_fragments.length = 0;
          for (const f of item.v.fragments) {
            response_fragments.push({
              id: f.id ?? response_fragments.length,
              type: f.type ?? "RESPONSE",
              content: f.content ?? "",
            });
          }
          last_fragment_index = response_fragments.length - 1;
        }
      }
      continue;
    }

    // Case: explicit path append like { p: "response/fragments/-1/content", o: "APPEND", v: "..." }
    if (
      payload &&
      typeof payload.p === "string" &&
      payload.o === "APPEND" &&
      Object.prototype.hasOwnProperty.call(payload, "v")
    ) {
      const path = payload.p;
      if (path.includes("response/fragments") && path.endsWith("/content")) {
        // treat as content append
        append_to_last_fragment(payload.v);
        continue;
      }
    }

    // fallback: nothing to do for this payload
  }

  // assemble final message: sort fragments by id when available, join contents
  const sorted = response_fragments.slice().sort((a, b) => {
    const ai = Number.isFinite(a.id) ? a.id : 0;
    const bi = Number.isFinite(b.id) ? b.id : 0;
    return ai - bi;
  });

  const message = sorted.map((f) => f.content ?? "").join("");
  return String(message);
}
