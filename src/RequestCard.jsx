import React from 'react'

const RequestCard = () => {
  const conditionColors = {
    New: "bg-green-100 text-green-800",
    "Like New": "bg-blue-100 text-blue-800",
    Good: "bg-yellow-100 text-yellow-800",
    Fair: "bg-orange-100 text-orange-800"
  };

  return (
    <div className="bg-[#8db0b0] rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-[3/4] overflow-hidden bg-slate-100">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-900 mb-1 line-clamp-1">
          {book.title}
        </h3>
        <p className="text-sm text-slate-600 mb-3">{book.author}</p>

        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
            {/* <Tag className="w-3 h-3" /> */}
            {book.genre}
          </span>
          <span
            className={`px-2 py-1 text-xs rounded ${conditionColors[book.condition]}`}
          >
            {book.condition}
          </span>
        </div>

        {/* {showRequestButton && ( */}
        <button className="w-1/2 py-2 bg-green-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Accept 
        </button>
        <button className="w-1/2 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Reject
        </button>
        {/* )} */}
      </div>
    </div>
  );
};


export default RequestCard