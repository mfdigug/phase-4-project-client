import React from "react";

const BookList = ({ books }) => {
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="bg-slate-800 p-4 rounded">
            <h3 className="text-xl font-semibold">{book.title}</h3>
            <p className="text-sm text-gray-400">by {book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
