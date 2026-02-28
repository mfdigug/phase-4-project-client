import { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import BookList from "./BookList";
import UserProfile from "./UserProfile";

export const UserContext = createContext();

function App() {
  const [books, setBooks] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [showRequestToast, setShowRequestToast] = useState(false);

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

  const handleRequest = async (bookId) => {
    if (!currentUser?.id) return;

    try {
      const response = await fetch("/api/book_requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          book_copy_id: bookId,
          requester_id: currentUser.id,
        }),
      });

      if (!response.ok) {
        // if backend returns error status, update this to capture it.
        throw new Error("Error creating request");
      }
      const newRequest = await response.json();
      console.log("Request created:", newRequest);

      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));

      setCurrentUser((prevUser) => ({
        ...prevUser,
        book_requests: [...(prevUser.book_requests || []), newRequest],
      }));

      setShowRequestToast(true);
    } catch (err) {
      console.error("Failed to create request:", err);
    }
  };

  const handleDeleteRequest = async (requestId) => {
    try {
      const response = await fetch(`/api/book_requests/${requestId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error deleting request");
      }

      console.log(requestId, "deleted successfully");

      setCurrentUser((prevUser) => ({
        ...prevUser,
        book_requests: prevUser.book_requests.filter(
          (request) => request.id !== requestId,
        ),
      }));
    } catch (err) {
      console.error("Failed to delete request:", err);
    }
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
            element={<UserProfile onDeleteRequest={handleDeleteRequest} />}
          />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
