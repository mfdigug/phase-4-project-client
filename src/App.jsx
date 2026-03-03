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
import { ActionsContextProvider } from "./ActionsContext";

export const UserContext = createContext();

function App() {
  const { books, setBooks } = useBooks();
  const { currentUser, setCurrentUser } = useCurrentUser(5);

  const { showToast: showRequestToast, setShowToast: setShowRequestToast } =
    useToast();

  const {
    showToast: showRequestDeletedToast,
    setShowToast: setShowRequestDeletedToast,
  } = useToast();

  const {
    showToast: showRequestRejectedToast,
    setShowToast: setShowRequestRejectedToast,
  } = useToast();

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <NavBar />
      <UserContext.Provider value={currentUser}>
        <ActionsContextProvider
          currentUser={currentUser}
          setBooks={setBooks}
          setCurrentUser={setCurrentUser}
          setShowRequestToast={setShowRequestToast}
          setShowRequestDeletedToast={setShowRequestDeletedToast}
        >
          <Routes>
            <Route
              path="/"
              element={
                <BookList books={books} showRequestToast={showRequestToast} />
              }
            />
            <Route
              path="/userprofile/*"
              element={
                <UserProfile
                  showRequestDeletedToast={showRequestDeletedToast}
                  setShowRequestRejectedToast={setShowRequestRejectedToast}
                  showRequestRejectedToast={showRequestRejectedToast}
                />
              }
            />
          </Routes>
        </ActionsContextProvider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
