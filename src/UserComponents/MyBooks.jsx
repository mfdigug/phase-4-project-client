import { useContext } from "react";
import { UserContext } from "../App";
import BookCard from "../BookCard";
import { NavLink } from "react-router-dom";
import { useBooks } from "../hooks/useBooks";
import { useActionsContext } from "../ActionsContext";

const MyBooks = ({ showBookDeletedToast }) => {
  const currentUser = useContext(UserContext);
  const { handleDeleteBook } = useActionsContext();

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

      {showBookDeletedToast && (
        <div className="mb-4 left-6 z-50 bg-red-600 text-white text-xl px-6 py-3 rounded-lg shadow-lg">
          Book Deleted
        </div>
      )}

      {currentUser?.book_copies?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentUser.book_copies.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              showDeleteTitle={true}
              onDeleteBook={handleDeleteBook}
            />
          ))}
        </div>
      ) : (
        <p className="text-slate-400 text-lg mt-4">No books available</p>
      )}
    </div>
  );
};

export default MyBooks;
