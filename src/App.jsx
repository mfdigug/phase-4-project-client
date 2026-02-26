import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import BookList from "./BookList";
import UserProfile from "./UserProfile";

function App() {
  const [books, setBooks] = useState([]);
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    fetch("/api/books")
      .then((r) => r.json())
      .then((data) => setBooks(data));
  }, []);
  
  useEffect(() => {
    fetch("/api/users/4")
      .then((r) => r.json())
      .then((data) => setCurrentUser(data));
  }, []);
  

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <NavBar />
      <Routes>
        <Route path="/" element={<BookList books={books} />} />
        <Route path="/userprofile/*" element={<UserProfile user={currentUser} />} />
      </Routes>
    </div>
  );
}

export default App;
