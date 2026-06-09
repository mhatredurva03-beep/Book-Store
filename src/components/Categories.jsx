
export function Categories() {
  const categories = [
    "Fiction",
    "Biography",
    "Science",
    "Self Help",
    "History",
  ];

  return (
    <>
      <style>{`
        .category-card {
          background: #1E293B;
          color: white;
          padding: 30px;
          border-radius: 15px;
          width: 180px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .category-card:hover {
          transform: translateY(-10px);
          background: #F59E0B;
          box-shadow: 0 15px 30px rgba(0,0,0,0.3);
        }
      `}</style>

      <section style={{ padding: "60px", textAlign: "center" }}>
        <h2>Popular Categories</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {categories.map((item) => (
            <div key={item} className="category-card">
              {item}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

