import { ProductCards } from "../components/ProductCards.jsx";
export function Books() {
  return (
    <>

      <div style={{ padding: "80px 60px 40px 60px" }}>
        <h1>Our Collection</h1>

        <input
          type="text"
          placeholder="Search Books..."
          style={{
            padding: "12px 20px",
            width: "300px",
            maxWidth:"300px",
            borderRadius: "10px",
            marginTop: "20px",
            marginBottom:"60px",
            border:"1px solid#ccc",
            fontSize:"16px",
            display:"block",
            marginInlineStart:"auto",
            marginRight:"auto"
          }}
        />

        <ProductCards />
      </div>
    </>
  );
}
