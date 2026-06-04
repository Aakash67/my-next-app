import Link from "next/link";

export default function Home() {
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
        Home Page
      </h1>

      <Link
        href="/dashboard"
        style={{
          color: "#2563eb",
          fontSize: "18px",
          marginRight: "24px",
        }}
      >
        Dashboard
      </Link>

      <Link
        href="/products/1"
        style={{
          color: "#2563eb",
          fontSize: "18px",
        }}
      >
        Products
      </Link>
    </div>
  );
}