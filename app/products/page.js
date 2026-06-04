export default async function Products() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      cache: "force-cache",
    }
  );

  const products = await response.json();

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", padding: "48px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#111827", marginBottom: "24px" }}>
        Products List (SSG)
      </h1>
      <div>
        {products.slice(0, 5).map((item) => (
          <p key={item.id} style={{ padding: "12px 16px", marginBottom: "8px", backgroundColor: "#f3f4f6", borderRadius: "8px", color: "#111827", fontSize: "15px" }}>
            {item.title}
          </p>
        ))}
      </div>
    </div>
  );
}