import { useContext } from "react";
import { UserContext } from "../App";
import BookCard from "../BookCard";
import AddBookButton from "./AddBookButton";

const MyBooks = () => {
  const currentUser = useContext(UserContext);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
        <div>
          <h2 className="text-3xl font-semibold text-slate-500 mb-6">
            My Books
          </h2>
        </div>

        <div className="text-right">
          <AddBookButton onClick={() => handleAddBook()} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentUser?.book_copies?.map((book) => (
          <BookCard key={book.id} book={book} showDeleteTitle={true} />
        )) || <p> No books available</p>}
      </div>
    </div>
  );
};

export default MyBooks;
