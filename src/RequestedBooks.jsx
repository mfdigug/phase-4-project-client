import { useState, useContext } from "react";
import { UserContext } from "./App";
import BookCard from "./BookCard";

const RequestedBooks = ({ onDeleteRequest }) => {
  const currentUser = useContext(UserContext);

  return (
    <div>
      <h2 className="text-3xl font-semibold text-slate-500 mb-6">
        Requested Books
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentUser?.book_requests?.length > 0 ? (
          currentUser?.book_requests?.map((request) => (
            <BookCard
              key={request.id}
              request={request}
              book={request.book_copy}
              status={request.status}
              showDeleteRequest={true}
              onDeleteRequest={onDeleteRequest}
            />
          ))
        ) : (
          <p> No books requested</p>
        )}
      </div>
    </div>
  );
};

export default RequestedBooks;
