export async function GET() {
  const response = await fetch(
    "https://router.huggingface.co/featherless-ai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistralai/Mistral-7B-Instruct-v0.2",
        messages: [{ role: "user", content: "Explain React Hooks" }],
        max_tokens: 512,
      }),
    }
  );

  const result = await response.json();

  return Response.json(result);
}