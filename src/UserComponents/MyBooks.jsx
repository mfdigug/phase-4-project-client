import { useContext } from "react";
import { UserContext } from "../App";
import BookCard from "../BookCard";
import { NavLink } from "react-router-dom";
import { useBooks } from "../hooks/useBooks";

const MyBooks = () => {
  const currentUser = useContext(UserContext);
  const { deleteBook } = useBooks();

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
        <div>
          <h2 className="text-3xl font-semibold text-slate-500 mb-6">
            My Books
          </h2>
        </div>

        <div className="text-right">
          <NavLink
            to="/userprofile/addbook"
            className="flex items-center gap-2 px-4 py-3 bg-slate-600 transition-colors  text-white hover:bg-slate-700"
          >
            Add New Book
          </NavLink>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentUser?.book_copies?.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            showDeleteTitle={true}
            onDeleteBook={deleteBook}
          />
        )) || <p> No books available</p>}
      </div>
    </div>
  );
};

export default MyBooks;
