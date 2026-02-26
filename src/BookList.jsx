import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  //set if is_avail condition

  return (
   <div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-[120px]">
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-start justify-center h-full">
          <h2 className="text-2xl font-semibold text-white ml-8 mt-4 mb-2">Book List</h2>
          <h3 className="text-xl font-light text-slate-400 ml-8 mt-2 mb-6">Browse through currently available titles</h3>
          </div>
        </div>
      </div>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default BookList;
