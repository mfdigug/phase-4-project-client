import { useContext } from "react";
import { UserContext } from "./App"
import BookCard from "./BookCard";


const BookList = ({ books, user }) => {

  const currentUser = useContext(UserContext)
  const availableBooks = books.filter((book => book.is_available === true && book.owner.id !== currentUser.id))

  return (
   <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 mt-8">
      
      <div className="flex justify-between items-center h-[120px]">
       
        <div className="flex items-center gap-2">
          
          <div className="flex flex-col items-start justify-center h-full">
            <h2 className="text-3xl font-semibold text-slate-500 mb-2">
              Available Books
            </h2>
            <p className="text-slate-300">Browse through currently available titles:</p>
          </div>

        </div>
      
      </div>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {availableBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default BookList;
