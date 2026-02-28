import React from "react";

const RequestCard = ({ requestObj }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-AU", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="bg-[#8db0b0] rounded-lg border border-slate-200 mb-4 p-4 hover:shadow-md transition-shadow">
      <div className="flex gap-4 mb-2">
        <div className="w-20 h-28 flex-shrink-0 rounded overflow-hidden bg-slate-100">
          <img
            src={requestObj.book_copy.image}
            alt={requestObj.book_copy.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-slate-900 mb-1 ">
                {requestObj.book_copy.title}
              </h3>
              <p className="text-sm text-slate-600">
                {requestObj.book_copy.author}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-slate-600 mb-3">
          <p>
            Requested by:{" "}
            <span className="font-medium">{requestObj.requester.username}</span>{" "}
            on:{" "}
            <span className="font-medium">
              {formatDate(requestObj.created_at)}
            </span>
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          Accept
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
          Reject
        </button>
        {/* )} */}
      </div>
    </div>
  );
};

export default RequestCard;
