import { createContext, useContext } from "react";
import { requestBook } from "./BookRequestFunctions/requestBook";
import { deleteRequest } from "./BookRequestFunctions/deleteRequest";
import { deleteBook } from "./MyBookFunctions/deleteBook";
import { addBook } from "./MyBookFunctions/addBook";

const ActionsContext = createContext();

export function ActionsContextProvider({
  children,
  currentUser,
  setBooks,
  setCurrentUser,
  setShowRequestToast,
  setShowRequestDeletedToast,
  setShowBookDeletedToast,
}) {
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

  const handleDeleteBook = (bookId) => {
    deleteBook(bookId, setCurrentUser, setShowBookDeletedToast);
  };

  const handleAddBook = (newBook) => {
    addBook(newBook, setCurrentUser);
  };

  return (
    <ActionsContext.Provider
      value={{
        handleRequest,
        handleDeleteRequest,
        handleDeleteBook,
        handleAddBook,
      }}
    >
      {children}
    </ActionsContext.Provider>
  );
}

export const useActionsContext = () => {
  return useContext(ActionsContext);
};
