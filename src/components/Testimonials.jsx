export function Testimonials() {
  const reviews = [
    {
      name: "Sarah Johnson",
      review:
        "An amazing collection of books. Every purchase has been worth it.",
    },
    {
      name: "Michael Brown",
      review:
        "A beautifully designed bookstore with a fantastic selection.",
    },
    {
      name: "Emma Wilson",
      review:
        "My go-to destination whenever I'm looking for a new read.",
    },
  ];

  return (
    <section
      style={{
        padding: "80px",
        background: "#F8FAFC",
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
        What Our Readers Say
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#64748B",
          marginBottom: "50px",
        }}
      >
        Trusted by book lovers everywhere.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {reviews.map((review) => (
          <div
            key={review.name}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(0,0,0,0.1)";
            }}
            style={{
              width: "250px",
              background: "white",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              transition: "0.3s ease",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                fontSize: "30px",
                color: "#F59E0B",
                lineHeight: "1",
              }}
            >
              "
            </div>

            <p
              style={{
                color: "#475569",
                fontSize: "14px",
                fontStyle: "italic",
                marginBottom: "20px",
              }}
            >
              {review.review}
            </p>

            <p
              style={{
                color: "#F59E0B",
                marginBottom: "10px",
              }}
            >
              ⭐⭐⭐⭐⭐
            </p>

            <h3
              style={{
                color: "#0F172A",
                margin: "0",
              }}
            >
              {review.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
