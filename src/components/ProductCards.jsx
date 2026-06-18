

import { useEffect, useState } from "react";
import book1 from "/src/pictures/book1.jpg";
import book2 from "/src/pictures/book2.jpg";
import book3 from "/src/pictures/book3.jpg";
import { supabase } from "../supabase.js";

export function ProductCards() {
   const [Books,setBooks] = useState([])
  const [title,setTitle]=useState("")
  const [author,setAuthor]=useState("")
  const [price,setPrice]=useState("")
  const [image,setImage]=useState("")
  const [viewForm,setViewForm] = useState(false)
  async function AddBook(){
    setViewForm(false);
    const {data,error} = await supabase.from("BookStore").insert([{title,author,price,image}])
    if (error) {
    console.log("Insert Error:", error);
    return;
  }

    fetchBooks();
  }

  async function deleteBook(id) {
    await supabase.from("BookStore").delete().eq("id",id)

    fetchBooks()
  }

  async function fetchBooks(){
    const {data} = await supabase.from("BookStore").select("*")
    setBooks(data);
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
              
            <img src={book.image.trim()} alt={book.title} width="200" height="200" 
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