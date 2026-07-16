import { useState, useEffect, useRef } from "react";

export function App() {
  const [sessions, setSessions] = useState([]);
  const [current, setCurrent] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Load sessions on mount
  useEffect(() => {
    loadSessions();
  }, []);

  async function loadSessions() {
    try {
      const res = await fetch("/flow/list");
      const list = await res.json();
      setSessions(list.reverse()); // oldest first, newest last
    } catch (err) {
      console.error("Failed to load sessions:", err);
    }
  }

  async function loadMessages(sessionId) {
    if (!sessionId) return;
    setLoading(true);
    try {
      const viewRes = await fetch("/flow/view");
      const viewData = await viewRes.json();
      const steps = viewData.path || [];
      const msgs = [];
      for (let step of steps) {
        const stepRes = await fetch(`/flow/read/${step}`);
        const stepData = await stepRes.json();
        if (stepData.type === "ask") {
          msgs.push(stepData.data); // { prompt, answer }
        }
      }
      setMessages(msgs);
    } catch (err) {
      console.error("Failed to load messages:", err);
      setMessages([]);
    } finally {
      setLoading(false);
    }
  }

  async function pickSession(id) {
    try {
      await fetch(`/flow/pick/${id}`, { method: "POST" });
      setCurrent(id);
      await loadMessages(id);
    } catch (err) {
      console.error("Failed to pick session:", err);
    }
  }

  async function createSession() {
    try {
      const res = await fetch("/flow/create", { method: "POST" });
      const data = await res.json();
      const newSession = { id: data.id };
      setSessions((prev) => [...prev, newSession]); // newest at last
      await pickSession(newSession.id);
    } catch (err) {
      console.error("Failed to create session:", err);
    }
  }

  async function sendMessage() {
    if (!input || !current) return;
    try {
      const res = await fetch("/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ what: input, where: "ollama" }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { prompt: input, answer: data.answer }]);
      setInput("");
    } catch (err) {
      console.error("Failed to send message:", err);
    }
  }

  return (
    <div>
      <div>
        <strong>Sessions:</strong>{" "}
        {sessions.map((s) => (
          <button
            key={s.id}
            onClick={() => pickSession(s.id)}
            style={{
              fontWeight: current === s.id ? "bold" : "normal",
              marginRight: "4px",
            }}
          >
            {s.id}
          </button>
        ))}
        <button onClick={createSession}>New Session</button>
      </div>

      <hr />

      {loading ? (
        <p>Loading messages...</p>
      ) : (
        <div>
          {messages.map((m, idx) => (
            <div key={idx} style={{ marginBottom: "8px" }}>
              <p><strong>User:</strong> {m.prompt}</p>
              <p><strong>Assistant:</strong> {m.answer}</p>
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>
      )}

      <div style={{ marginTop: "8px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
