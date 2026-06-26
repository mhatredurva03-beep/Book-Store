
// import book1 from "/src/pictures/book1.jpg";
// import book2 from "/src/pictures/book2.jpg";
// import book3 from "/src/pictures/book3.jpg";

// export function ProductCards() {
//   const books = [
//     {
//       image: book1,
//       title: "Atomic Habits",
//       price: "₹499",
//       rating: "⭐⭐⭐⭐⭐",
//     },
//     {
//       image: book2,
//       title: "Rich Dad Poor Dad",
//       price: "₹399",
//       rating: "⭐⭐⭐⭐⭐",
//     },
//     {
//       image: book3,
//       title: "The Alchemist",
//       price: "₹299",
//       rating: "⭐⭐⭐⭐⭐",
//     },
//   ];

//   return (
//     <section
//       style={{
//         padding: "80px",
//         backgroundColor: "#F8FAFC",
//       }}
//     >
//       <h2
//         style={{
//           textAlign: "center",
//           fontSize: "42px",
//           color: "#0F172A",
//           marginBottom: "15px",
//         }}
//       >
//         Best Sellers
//       </h2>

//       <p
//         style={{
//           textAlign: "center",
//           color: "#64748B",
//           marginBottom: "50px",
//           fontSize: "18px",
//         }}
//       >
//         Discover our most loved books chosen by readers worldwide.
//       </p>

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "35px",
//           flexWrap: "wrap",
//         }}
//       >
//         {books.map((book) => (
//           <div
//             key={book.title}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform =
//                 "translateY(-12px)";
//               e.currentTarget.style.boxShadow =
//                 "0 25px 50px rgba(0,0,0,0.25)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform =
//                 "translateY(0)";
//               e.currentTarget.style.boxShadow =
//                 "0 10px 25px rgba(0,0,0,0.1)";
//             }}
//             style={{
//               width: "240px",
//               backgroundColor: "white",
//               borderRadius: "20px",
//               overflow: "hidden",
//               boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
//               transition: "all 0.3s ease",
//               cursor: "pointer",
//             }}
//           >
//             <img
//               src={book.image}
//               alt={book.title}
//               style={{
//                 width: "100%",
//                 height: "280px",
//                 objectFit: "cover",
//               }}
//             />

//             <div style={{ padding: "25px" }}>
//               <p
//                 style={{
//                   color: "#F59E0B",
//                   marginBottom: "10px",
//                 }}
//               >
//                 {book.rating}
//               </p>

//               <h3
//                 style={{
//                   color: "#0F172A",
//                   marginBottom: "12px",
//                   fontSize: "24px",
//                 }}
//               >
//                 {book.title}
//               </h3>

//               <p
//                 style={{
//                   color: "#F59E0B",
//                   fontSize: "22px",
//                   fontWeight: "bold",
//                   marginBottom: "20px",
//                 }}
//               >
//                 {book.price}
//               </p>

//               <button
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background =
//                     "#F59E0B";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background =
//                     "#0F172A";
//                 }}
//                 style={{
//                   width: "100%",
//                   padding: "14px",
//                   border: "none",
//                   borderRadius: "12px",
//                   background: "#0F172A",
//                   color: "white",
//                   cursor: "pointer",
//                   transition: "0.3s ease",
//                   fontSize: "16px",
//                   fontWeight: "600",
//                 }}
//               >
//                 View Details
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import { useEffect, useState } from "react";
// import book1 from "/src/pictures/book1.jpg";
// import book2 from "/src/pictures/book2.jpg";
// import book3 from "/src/pictures/book3.jpg";
import { supabase } from "../supabase.js";

export function ProductCards() {
  // const books = [
  //   {
  //     image: book1,
  //     title: "Atomic Habits",
  //     price: "₹499",
  //     rating: "⭐⭐⭐⭐⭐",
  //   },
  //   {
  //     image: book2,
  //     title: "Rich Dad Poor Dad",
  //     price: "₹399",
  //     rating: "⭐⭐⭐⭐⭐",
  //   },
  //   {
  //     image: book3,
  //     title: "The Alchemist",
  //     price: "₹299",
  //     rating: "⭐⭐⭐⭐⭐",
  //   },
  // ];

  const [Books,setBooks] = useState([])
  const [title,setTitle]=useState("")
  const [author,setAuthor]=useState("")
  const [price,setPrice]=useState("")
  const [image,setImage]=useState("")
  const [viewForm,setViewForm] = useState(false)
  async function AddBook() {
  const { data, error } = await supabase
    .from("BookStore")
    .insert([
      {
        title,
        author,
        price,
        image,
      },
    ])
    .select();

  console.log("INSERT DATA:", data);
  console.log("INSERT ERROR:", error);

  if (error) {
    alert(error.message);
    return;
  }

  fetchBooks();
  setViewForm(false);
}
  async function deleteBook(id) {
    await supabase.from("BookStore").delete().eq("id",id)

    fetchBooks()
  }

  async function fetchBooks() {
  const { data, error } = await supabase.from("BookStore").select("*");

  if (error) {
    console.log("Fetch Error:", error);
    return;
  }

  console.log("Fetched data:", data);

  setBooks(data ?? []);
}

  useEffect(() => {
    fetchBooks();
  },[])

  return (
    <>
      <style>{`
        .products-section {
          padding: 80px;
          background-color: #F8FAFC;
        }

        .products-title {
          text-align: center;
          font-size: 42px;
          color: #0F172A;
          margin-bottom: 15px;
        }

        .products-subtitle {
          text-align: center;
          color: #64748B;
          margin-bottom: 50px;
          font-size: 18px;
        }

        .products-container {
          display: flex;
          justify-content: center;
          gap: 35px;
          flex-wrap: wrap;
        }

        .book-card {
          width: 240px;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .book-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.25);
        }

        .book-image {
          width: 100%;
          height: 280px;
          object-fit: cover;
        }

        .book-content {
          padding: 25px;
        }

        .rating {
          color: #F59E0B;
          margin-bottom: 10px;
        }

        .book-title {
          color: #0F172A;
          margin-bottom: 12px;
          font-size: 24px;
        }

        .price {
          color: #F59E0B;
          font-size: 22px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .view-btn {
          width: 100%;
          padding: 14px;
          border: none;
          border-radius: 12px;
          background: #0F172A;
          color: white;
          cursor: pointer;
          transition: 0.3s ease;
          font-size: 16px;
          font-weight: 600;
        }

        .view-btn:hover {
          background: #F59E0B;
        }

        .add-book-btn {
  display: block;
  margin: 30px auto;
  padding: 14px 28px;
  border: none;
  border-radius: 12px;
  background: #080707;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;
}
        .add-book-btn:hover {
        background: #F59E0B;
        }

        .book-form {
  max-width: 400px;
  margin: 30px auto;
  padding: 25px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.book-form input {
  padding: 12px 15px;
  border: 1px solid #CBD5E1;
  border-radius: 10px;
  font-size: 15px;
  outline: none;
}

.book-form input:focus {
  border-color: #F59E0B;
}
  .submit-btn {
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: #16A34A;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;
}

.submit-btn:hover {
  background: #15803D;
}

.delete-btn {
  width: 100%;
  margin-top: 10px;
  padding: 12px;
  border: none;
  border-radius: 12px;
  background: #DC2626;
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;
}

.delete-btn:hover {
  background: #B91C1C;
}

      `}</style>

      <section className="products-section">

        <h2 className="products-title">Best Sellers</h2>

        <p className="products-subtitle">
          Discover our most loved books chosen by readers worldwide.
        </p>

        <div className="products-container">
          {Books.map((book) => (
            <div className="book-card" key={book.id}>
              <img
                src={book.image}
                alt={book.title}
                className="book-image"
              />

              <div className="book-content">
                {/* <p className="rating">{book.rating}</p> */}

                <h3 className="book-title">{book.title}</h3>
                <h3 className="book-title">{book.author}</h3>

                <p className="price">{book.price}</p>

                <button className="view-btn">
                  View Details
                </button>
                <button className="delete-btn" onClick={() => deleteBook(book.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>

        <br/>
        <button className="add-book-btn" onClick={() => setViewForm(true)}>Add Book</button>
        {
          viewForm && (
            <div className="book-form">
              <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
              <input placeholder="Author Name" onChange={(e) => setAuthor(e.target.value)} />
              <input placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
              <input placeholder="Url" onChange={(e) => setImage(e.target.value)} />
              <button onClick={AddBook} className="submit-btn">Submit</button>
            </div>
          )
        }
      </section>
    </>
  );
}
