import { useState, useEffect } from "react";

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/api/books")
      .then((r) => r.json())
      .then((data) => setBooks(data));
  }, []);

  function addBook(newBook) {
    fetch("/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setBooks((prevBooks) => [...prevBooks, data]);
      });
  }

  return { books, addBook, setBooks };
};
