export default async function ProductPage({ params }) {
  const { id } = await params;

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", padding: "48px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#111827" }}>
        Product ID: {id}
      </h1>
      <p style={{ color: "#6b7280", marginTop: "12px" }}>
        This is a dynamic route page.
      </p>
    </div>
  );
}