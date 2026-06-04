export default function Layout({ children }) {
  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <nav style={{ backgroundColor: "#2563eb", padding: "16px 32px" }}>
        <span style={{ color: "#ffffff", fontSize: "18px", fontWeight: "bold" }}>
          Dashboard Menu
        </span>
      </nav>
      <main style={{ padding: "48px" }}>
        {children}
      </main>
    </div>
  );
}