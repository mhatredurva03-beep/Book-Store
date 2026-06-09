import{Navbar}from "../components/Navbar.jsx";
import{ Footer} from "../components/Footer.jsx";
export function About() {
  return (
    <>

      <div
        style={{
          padding: "80px",
          textAlign: "center"
        }}
      >
        <h1>About BookVerse</h1>

        <p>
          BookVerse is a premium online bookstore
          dedicated to connecting readers with
          inspiring books from around the world.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            marginTop: "40px"
          }}
        >
          <div>
            <h2>10K+</h2>
            <p>Books</p>
          </div>

          <div>
            <h2>50K+</h2>
            <p>Readers</p>
          </div>

          <div>
            <h2>4.9★</h2>
            <p>Rating</p>
          </div>
        </div>
      </div>
    </>
  );
}

