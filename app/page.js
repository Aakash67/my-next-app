import ProductImage from "./components/ProductImage";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", padding: "48px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#111827", marginBottom: "24px" }}>
        Optimized Image
      </h1>
      <ProductImage />
    </div>
  );
}