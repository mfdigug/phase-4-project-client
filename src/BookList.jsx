import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  //set if is_avail condition

  return (
    <div>
      <h2>Book List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
