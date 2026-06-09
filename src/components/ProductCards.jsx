
import book1 from "/src/pictures/book1.jpg";
import book2 from "/src/pictures/book2.jpg";
import book3 from "/src/pictures/book3.jpg";

export function ProductCards() {
  const books = [
    {
      image: book1,
      title: "Atomic Habits",
      price: "₹499",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      image: book2,
      title: "Rich Dad Poor Dad",
      price: "₹399",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      image: book3,
      title: "The Alchemist",
      price: "₹299",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <section
      style={{
        padding: "80px",
        backgroundColor: "#F8FAFC",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          color: "#0F172A",
          marginBottom: "15px",
        }}
      >
        Best Sellers
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#64748B",
          marginBottom: "50px",
          fontSize: "18px",
        }}
      >
        Discover our most loved books chosen by readers worldwide.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "35px",
          flexWrap: "wrap",
        }}
      >
        {books.map((book) => (
          <div
            key={book.title}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-12px)";
              e.currentTarget.style.boxShadow =
                "0 25px 50px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(0,0,0,0.1)";
            }}
            style={{
              width: "240px",
              backgroundColor: "white",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            <img
              src={book.image}
              alt={book.title}
              style={{
                width: "100%",
                height: "280px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "25px" }}>
              <p
                style={{
                  color: "#F59E0B",
                  marginBottom: "10px",
                }}
              >
                {book.rating}
              </p>

              <h3
                style={{
                  color: "#0F172A",
                  marginBottom: "12px",
                  fontSize: "24px",
                }}
              >
                {book.title}
              </h3>

              <p
                style={{
                  color: "#F59E0B",
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                {book.price}
              </p>

              <button
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "#F59E0B";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "#0F172A";
                }}
                style={{
                  width: "100%",
                  padding: "14px",
                  border: "none",
                  borderRadius: "12px",
                  background: "#0F172A",
                  color: "white",
                  cursor: "pointer",
                  transition: "0.3s ease",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
