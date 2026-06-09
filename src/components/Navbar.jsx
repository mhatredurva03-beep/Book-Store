export function Navbar() {
  return (
    <nav
      style={{
        background: "#0F172A",
        color: "white",
        padding: "20px 80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: "0",
      }}
    >
      <h2 style={{ color: "#F59E0B" }}>📚 BookVerse</h2>

      <div style={{ display: "flex", gap: "30px" }}>
        <span>Home</span>
        <span>Books</span>
        <span>About</span>
        <span>Contact</span>
      </div>
    </nav>
  );
}
