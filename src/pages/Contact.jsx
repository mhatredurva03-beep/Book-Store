
import {Navbar} from "../components/Navbar.jsx";
import {Footer }from "../components/Footer.jsx";
export function Contact() {
  return (
    <>

      <div
        style={{
          padding: "80px",
          textAlign: "center"
        }}
      >
        <h1>Contact Us</h1>

        <div
          style={{
            maxWidth: "500px",
            margin: "auto"
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "15px"
            }}
          />

          <input
            type="email"
            placeholder="Your Email"
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "15px"
            }}
          />

          <textarea
            rows="5"
            placeholder="Message"
            style={{
              width: "100%",
              padding: "15px"
            }}
          />

          <button
            style={{
              marginTop: "20px",
              padding: "15px 30px",
              background: "#F59E0B",
              border: "none",
              borderRadius: "10px"
            }}
          >
            Send Message
          </button>
        </div>
      </div>

    
    </>
  );
}

