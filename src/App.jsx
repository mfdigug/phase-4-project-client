import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import BookList from "./BookList";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/api/books")
      .then((r) => r.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <NavBar />
      <Hero />
      <BookList books={books} />
    </div>
  );
}

export default App;
