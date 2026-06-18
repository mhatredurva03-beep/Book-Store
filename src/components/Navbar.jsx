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
        zIndex: "1000",
      }}
    >
      <h2
        style={{
          color: "#F59E0B",
          margin: 0,
        }}
      >
        📚 BookVerse
      </h2>

      <div
        style={{
          display: "flex",
          gap: "40px",
        }}
      >
        <a href="#home" style={linkStyle}>Home</a>
        <a href="#books" style={linkStyle}>Books</a>
        <a href="#about" style={linkStyle}>About</a>
        <a href="#contact" style={linkStyle}>Contact</a>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "500",
};