export async function GET() {
  return Response.json({
    message: "Chat API is ready. Send a POST request with a prompt.",
  });
}

export async function POST(request) {
  const { prompt, conversation } = await request.json();

  const contents = conversation
    ? conversation.map((msg) => ({
        role: msg.role === "assistant" ? "model" : msg.role,
        parts: [{ text: msg.content }],
      }))
    : [{ role: "user", parts: [{ text: prompt }] }];

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": process.env.GEMINI_API_KEY,
      },
      body: JSON.stringify({ contents }),
    }
  );

  const result = await response.json();

  return Response.json({
    message: result.candidates[0].content.parts[0].text,
  });
}