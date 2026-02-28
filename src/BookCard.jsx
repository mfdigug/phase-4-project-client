import RequestExchangeButton from "./BookCardButtons/RequestExchangeButton";

const BookCard = ({
  book,
  status,
  showDeleteRequest,
  showDeleteTitle,
  onRequest,
}) => {
  const conditionColors = {
    New: "bg-green-100 text-green-800",
    "Like New": "bg-blue-100 text-blue-800",
    Good: "bg-yellow-100 text-yellow-800",
    Fair: "bg-orange-100 text-orange-800",
  };

  const statusColors = {
    approved: "bg-green-200 text-green-900",
    rejected: "bg-red-200 text-red-900",
    pending: "bg-yellow-200 text-yellow-900",
  };

  return (
    <div className="bg-[#8db0b0] rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-3/4 overflow-hidden bg-slate-100">
        <img
          src={
            book.image ||
            "https://plus.unsplash.com/premium_photo-1772065873807-06f1313b665f?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={book.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://plus.unsplash.com/premium_photo-1772065873807-06f1313b665f?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-900 mb-1 line-clamp-1">
          {book.title}
        </h3>
        <p className="text-sm text-slate-600 mb-3">{book.author}</p>
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
            {book.genre}
          </span>
          <span
            className={`px-2 py-1 text-xs rounded ${conditionColors[book.condition]}`}
          >
            {book.condition}
          </span>

          {status && (
            <span
              className={`px-2 py-1 text-xs rounded ${statusColors[status]}`}
            >
              {status}
            </span>
          )}
        </div>

        {showDeleteRequest && (
          <button
            className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            onClick={() => handleDeleteRequest(request.id)}
          >
            Delete Request
          </button>
        )}
        {showDeleteTitle && (
          <button
            className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            onClick={() => handleDeleteBook(book.id)}
          >
            Delete Book
          </button>
        )}
        {!showDeleteRequest && !showDeleteTitle && (
          <RequestExchangeButton onClick={() => onRequest(book.id)} />
        )}
      </div>
    </div>
  );
};

export default BookCard;
