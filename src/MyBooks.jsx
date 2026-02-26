import React from "react";
import BookCard from "./BookCard";

const MyBooks = ({ user }) => {
  

  return (
    <div>
    <h2>My Books</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {user?.book_copies?.map((book) => (
          <BookCard key={book.id} book={book} />
        )) || <p> No books available</p>}
      </div>


    </div>
  )
};

export default MyBooks;
