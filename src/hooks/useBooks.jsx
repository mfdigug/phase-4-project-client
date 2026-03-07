import { useState, useEffect } from "react";

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/api/books")
      .then((r) => r.json())
      .then((data) => setBooks(data));
  }, []);

  return { books, setBooks };
};
