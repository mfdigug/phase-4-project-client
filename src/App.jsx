import { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import BookList from "./BookList";
import UserProfile from "./UserComponents/UserProfile";
import { requestBook } from "./BookRequestFunctions/requestBook";
import { deleteRequest } from "./BookRequestFunctions/deleteRequest";
import { useBooks } from "./hooks/useBooks";
import { useCurrentUser } from "./hooks/useCurrentUser";
import { useToast } from "./hooks/useToast";

export const UserContext = createContext();

function App() {
  const { books, setBooks } = useBooks();
  const { currentUser, setCurrentUser } = useCurrentUser(8);

  const { showToast: showRequestToast, setShowToast: setShowRequestToast } =
    useToast();

  const {
    showToast: showRequestDeletedToast,
    setShowToast: setShowRequestDeletedToast,
  } = useToast();

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
