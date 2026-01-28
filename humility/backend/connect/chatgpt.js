import { wait_for_sse } from "./listen.js";
import { get_page } from "./browser.js";

export async function send(message) {
  const page = await get_page();

  await page.goto("https://chatgpt.com");

  await page.waitForSelector("[contenteditable]", { timeout: 30_000 });
  await page.waitForSelector("#composer-submit-button", { timeout: 30_000 });

  // 🔧 UPDATED INSERTION LOGIC
  await page.evaluate((message) => {
    const input = document.querySelector("[contenteditable]");
    input.focus();
    input.innerHTML = "";

    const lines = message.split("\n");

    for (const line of lines) {
      const p = document.createElement("p");
      // non-breaking space keeps empty lines intact
      p.textContent = line === "" ? "\u00A0" : line;
      input.appendChild(p);
    }

    input.dispatchEvent(new Event("input", { bubbles: true }));
  }, message);

  await page.click("#composer-submit-button");

  const raw_events = await wait_for_sse(
    page,
    /^https:\/\/chatgpt\.com\/backend-api\/f\/conversation$/,
    (event) =>
      event.split("\n").some((line) => line.trim() === "data: [DONE]")
  );

  return convert_chatgpt(raw_events);
}

export function convert_chatgpt(event_stream) {
  const json = JSON;

  const split_lines = (s) => s.replace(/\r/g, "").split("\n");
  const trim = (s) => (s == null ? "" : String(s).trim());
  const is_blank = (s) => trim(s) === "";

  const parse_events = (raw) => {
    const lines = split_lines(raw);
    const events = [];
    let cur_event = { event: null, data_lines: [] };

    const flush = () => {
      if (cur_event.data_lines.length > 0 || cur_event.event !== null) {
        events.push({
          event: cur_event.event,
          data: cur_event.data_lines.join("\n"),
        });
      }
      cur_event = { event: null, data_lines: [] };
    };

    for (const line of lines) {
      if (line.startsWith("event:")) {
        cur_event.event = trim(line.slice("event:".length));
      } else if (line.startsWith("data:")) {
        // remove the "data:" prefix and any leading whitespace after it
        cur_event.data_lines.push(
          line.slice("data:".length).replace(/^\s*/, "")
        );
      } else if (is_blank(line)) {
        flush();
      } else {
        // fallback: include whatever is present
        cur_event.data_lines.push(line);
      }
    }

    flush();
    return events;
  };

  const process_events_to_text = (events) => {
    let last_message_id = null;
    const messages_by_id = Object.create(null);
    const order = [];

    const ensure_message = (id, role = "assistant") => {
      if (!id) return null;
      if (!messages_by_id[id]) {
        messages_by_id[id] = { id, role, content: "" };
        order.push(id);
      }
      return messages_by_id[id];
    };

    const append_to_last = (text) => {
      if (!last_message_id) return;
      // ensure content exists
      if (!messages_by_id[last_message_id]) return;
      messages_by_id[last_message_id].content += text;
    };

    const replace_last = (text) => {
      if (!last_message_id) return;
      if (!messages_by_id[last_message_id]) return;
      messages_by_id[last_message_id].content = text;
    };

    const handle_patch_ops = (ops) => {
      if (!Array.isArray(ops)) return;
      for (const op of ops) {
        if (!op || typeof op !== "object") continue;
        // target message content parts (typical path: /message/content/parts/0)
        if (
          typeof op.p === "string" &&
          op.p.includes("/message/content/parts")
        ) {
          if (op.o === "append" && typeof op.v === "string") {
            append_to_last(op.v);
          } else if (op.o === "replace" && typeof op.v === "string") {
            // replace the content of the last part
            replace_last(op.v);
          } else if (op.o === "add" && typeof op.v === "string") {
            append_to_last(op.v);
          }
        } else {
          // other useful ops: sometimes status/end_turn patches are present but not needed here
          // but some op.v may itself be a string we should append (defensive)
          if (typeof op.v === "string" && op.o === "append") {
            append_to_last(op.v);
          }
        }
      }
    };

    for (const ev of events) {
      const raw = trim(ev.data);
      if (!raw || raw === "[DONE]") continue;

      let parsed;
      try {
        parsed = json.parse(raw);
      } catch {
        parsed = raw;
      }

      // If parsed is an object, handle several shapes seen in the stream
      if (parsed && typeof parsed === "object") {
        // new full message object inside v.message
        if (parsed.v && parsed.v.message) {
          const msg = parsed.v.message;
          const id = msg.id || null;
          const role = (msg.author && msg.author.role) || "assistant";
          ensure_message(id, role);
          if (Array.isArray(msg.content?.parts)) {
            // join parts into one string
            messages_by_id[id].content = msg.content.parts.join("");
          } else if (typeof msg.content === "string") {
            messages_by_id[id].content = msg.content;
          }
          last_message_id = id;
          continue;
        }

        // explicit input_message object
        if (parsed.type === "input_message" && parsed.input_message) {
          const im = parsed.input_message;
          const id = im.id || null;
          const role = (im.author && im.author.role) || "user";
          ensure_message(id, role);
          if (Array.isArray(im.content?.parts)) {
            messages_by_id[id].content = im.content.parts.join("");
          } else if (typeof im.content === "string") {
            messages_by_id[id].content = im.content;
          }
          last_message_id = id;
          continue;
        }

        // handle patch objects where parsed.v is an array of ops
        if (Array.isArray(parsed.v)) {
          handle_patch_ops(parsed.v);
          continue;
        }

        // top-level patch/add/append where p/o/v exist
        if ("p" in parsed && "o" in parsed && "v" in parsed) {
          if (typeof parsed.v === "string") {
            append_to_last(parsed.v);
          } else if (Array.isArray(parsed.v)) {
            handle_patch_ops(parsed.v);
          } else if (typeof parsed.v === "object" && parsed.v !== null) {
            // sometimes parsed.v is an object like { message: {...} } which we handled above,
            // otherwise if v has a string property we can append defensively
            if (
              typeof parsed.v === "object" &&
              typeof parsed.v.v === "string"
            ) {
              append_to_last(parsed.v.v);
            }
          }
          continue;
        }

        // sometimes parsed has a direct 'v' string
        if ("v" in parsed && typeof parsed.v === "string") {
          append_to_last(parsed.v);
          continue;
        }

        // defensive: if parsed is an object with a string field that looks like content, try to append it
        if (typeof parsed === "object") {
          // no-op (we already handled the main known shapes)
        }
      }

      // if parsed is a plain string (JSON string), append it
      if (typeof parsed === "string") {
        append_to_last(parsed);
      }
    }

    return order
      .map((id) => messages_by_id[id])
      .filter((m) => m && m.role === "assistant")
      .map((m) => trim(m.content))
      .filter(Boolean)
      .join("\n");
  };

  const events = parse_events(event_stream);
  return process_events_to_text(events);
}
