import { createContext, useContext } from "react";
import { requestBook } from "./BookRequestFunctions/requestBook";
import { deleteRequest } from "./BookRequestFunctions/deleteRequest";

const ActionsContext = createContext();

export function ActionsContextProvider({
  children,
  currentUser,
  setBooks,
  setCurrentUser,
  setShowRequestToast,
  setShowRequestDeletedToast,
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

  return (
    <ActionsContext.Provider value={{ handleRequest, handleDeleteRequest }}>
      {children}
    </ActionsContext.Provider>
  );
}

export const useActionsContext = () => {
  return useContext(ActionsContext);
};
