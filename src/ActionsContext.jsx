import { createContext, useContext } from "react";
import { requestBook } from "./BookRequestFunctions/requestBook";
import { deleteRequest } from "./BookRequestFunctions/deleteRequest";
import { acceptRequest } from "./BookRequestFunctions/acceptRequest";
import { rejectRequest } from "./BookRequestFunctions/rejectRequest";

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

  const handleAcceptRequest = (requestObj) => {
    acceptRequest(requestObj);
  };

  const handleRejectRequest = (requestObj) => {
    rejectRequest(requestObj);
  };

  return (
    <ActionsContext.Provider
      value={{
        handleRequest,
        handleDeleteRequest,
        handleAcceptRequest,
        handleRejectRequest,
      }}
    >
      {children}
    </ActionsContext.Provider>
  );
}

export const useActionsContext = () => {
  return useContext(ActionsContext);
};
