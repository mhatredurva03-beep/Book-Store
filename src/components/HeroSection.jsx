import hero from "/src/pictures/hero.jpg";

export function HeroSection() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "80px",
        background: "linear-gradient(to right,#0F172A,#1E293B)",
        color: "white",
      }}
    >
      <div>
        <h1
  style={{
    fontSize: "60px",
    fontWeight: "800",
    lineHeight: "1.1",
    color: "#ffffff",
    marginBottom: "20px",
    maxWidth: "600px"
  }}
>
  Discover Your
  <span style={{ color: "#F59E0B" }}> Next </span>
  Favorite Book
</h1>

        <p style={{ color: "#CBD5E1" }}>
          Explore thousands of books from every genre.
        </p>

        <button
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.boxShadow =
      "0 10px 25px rgba(245,158,11,0.5)";
    e.currentTarget.style.background = "#ffb21c";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.background = "#F59E0B";
  }}
  style={{
    padding: "15px 30px",
    background: "#F59E0B",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    marginTop: "20px",
    transition: "all 0.3s ease",
    fontWeight: "600",
  }}
>
  Explore Collection
</button>
      </div>

      <img
        src={hero}
        alt=""
        style={{
          width: "500px",
          borderRadius: "20px",
        }}
      />
    </section>
  );
}

