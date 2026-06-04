export const revalidate = 60;

export default async function Posts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const posts = await response.json();

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", padding: "48px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#111827", marginBottom: "24px" }}>
        Posts List (ISR)
      </h1>
      <div>
        {posts.slice(0, 5).map((post) => (
          <p key={post.id} style={{ padding: "12px 16px", marginBottom: "8px", backgroundColor: "#f3f4f6", borderRadius: "8px", color: "#111827", fontSize: "15px" }}>
            {post.title}
          </p>
        ))}
      </div>
    </div>
  );
}