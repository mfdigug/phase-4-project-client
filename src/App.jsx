import { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import BookList from "./BookList";
import UserProfile from "./UserComponents/UserProfile";
import { requestBook } from "./BookRequestFunctions/requestBook";
import { deleteRequest } from "./BookRequestFunctions/deleteRequest";

export const UserContext = createContext();

function App() {
  const [books, setBooks] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [showRequestToast, setShowRequestToast] = useState(false);
  const [showRequestDeletedToast, setShowRequestDeletedToast] = useState(false);

  useEffect(() => {
    fetch("/api/books")
      .then((r) => r.json())
      .then((data) => setBooks(data));
  }, []);

  useEffect(() => {
    fetch("/api/users/8")
      .then((r) => r.json())
      .then((data) => setCurrentUser(data));
  }, []);

  useEffect(() => {
    if (!showRequestToast) return;

    const timer = setTimeout(() => {
      setShowRequestToast(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [showRequestToast]);

  useEffect(() => {
    if (!showRequestDeletedToast) return;

    const timer = setTimeout(() => {
      setShowRequestDeletedToast(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [showRequestDeletedToast]);

  const handleRequest = (bookId) => {
    requestBook(
      bookId,
      currentUser,
      setBooks,
      setCurrentUser,
      setShowRequestToast,
    );
  };

  const handleDeleteRequest = (requestId) => {
    deleteRequest(requestId, setCurrentUser, setShowRequestDeletedToast);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <NavBar />
      <UserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path="/"
            element={
              <BookList
                books={books}
                handleRequest={handleRequest}
                showRequestToast={showRequestToast}
              />
            }
          />
          <Route
            path="/userprofile/*"
            element={
              <UserProfile
                onDeleteRequest={handleDeleteRequest}
                showRequestDeletedToast={showRequestDeletedToast}
              />
            }
          />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
