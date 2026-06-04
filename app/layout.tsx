import Image from "next/image";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#f3f4f6", minHeight: "100vh", padding: "48px" }}>

      <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#111827", marginBottom: "8px" }}>
        Font Optimization
      </h1>

      <p style={{ color: "#6b7280", fontSize: "16px", marginBottom: "32px" }}>
        This page uses the Inter font loaded and optimized by Next.js
      </p>

      <div style={{ backgroundColor: "#ffffff", padding: "24px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", maxWidth: "400px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>
          Inter Font Example
        </h2>
        <p style={{ color: "#374151", fontSize: "15px", lineHeight: "1.8" }}>
          ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />
          abcdefghijklmnopqrstuvwxyz <br />
          0123456789
        </p>
      </div>

    </div>
  );
}