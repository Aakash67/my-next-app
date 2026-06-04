"use client";

import { useState } from "react";

export default function AssistantPage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  function addMessage(role, content) {
    setMessages((previousMessages) => [
      ...previousMessages,
      { role, content },
    ]);
  }

  async function sendMessage() {
    setLoading(true);
    addMessage("user", message);

    const conversation = [
      ...messages,
      { role: "user", content: message },
    ];

    const result = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ conversation }),
    });

    const data = await result.json();
    addMessage("assistant", data.message);
    setLoading(false);
    setMessage("");
  }

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", padding: "48px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#111827", marginBottom: "24px" }}>
        Learning Assistant
      </h1>

      <div style={{ marginBottom: "24px" }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ padding: "12px 16px", marginBottom: "8px", borderRadius: "8px", backgroundColor: msg.role === "user" ? "#2563eb" : "#f3f4f6", color: msg.role === "user" ? "#ffffff" : "#111827", fontSize: "15px", maxWidth: "600px", marginLeft: msg.role === "user" ? "auto" : "0" }}>
            <strong>{msg.role === "user" ? "You" : "Assistant"}:</strong> {msg.content}
          </div>
        ))}
      </div>

      {loading && (
        <p style={{ color: "#f59e0b", fontSize: "16px", fontWeight: "600", marginBottom: "16px" }}>
          ⏳ Generating response...
        </p>
      )}

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask a question..."
        style={{ padding: "12px 16px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "15px", width: "400px", marginRight: "12px", color: "#111827" }}
      />

      <button
        onClick={sendMessage}
        style={{ backgroundColor: "#2563eb", color: "#ffffff", padding: "12px 24px", borderRadius: "8px", border: "none", cursor: "pointer", fontSize: "15px", fontWeight: "600" }}>
        Send
      </button>

    </div>
  );
}