// app/message/page.js

async function getMessage() {
  const { GET } = await import("../api/message/route");
  const response = await GET();
  return response.json();
}

export default async function MessagePage() {
  const data = await getMessage();

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        padding: "48px",
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          color: "#111827",
          marginBottom: "24px",
        }}
      >
        Frontend and Backend Communication
      </h1>

      <p
        style={{
          padding: "16px",
          backgroundColor: "#f3f4f6",
          borderRadius: "8px",
          color: "#111827",
          fontSize: "16px",
        }}
      >
        Message from API: {data.message}
      </p>
    </div>
  );
}