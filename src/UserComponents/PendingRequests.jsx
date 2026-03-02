import { useEffect, useContext, useState } from "react";
import { UserContext } from "../App";
import { useRequests } from "../hooks/useRequests";
import { acceptRequest } from "../BookRequestFunctions/acceptRequest";
import { rejectRequest } from "../BookRequestFunctions/rejectRequest";

import RequestCard from "./RequestCard";

const PendingRequests = ({
  setShowRequestRejectedToast,
  showRequestRejectedToast,
}) => {
  const currentUser = useContext(UserContext);
  const {
    pendingRequests,
    setPendingRequests,
    approvedRequests,
    setApprovedRequests,
  } = useRequests(currentUser);

  const handleAccept = (requestObj) => {
    acceptRequest(requestObj, setPendingRequests, setApprovedRequests);
  };

  const handleReject = (requestObj) => {
    rejectRequest(requestObj, setPendingRequests, setShowRequestRejectedToast);
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold text-slate-500 mb-6">
        Pending Requests
      </h2>
      {showRequestRejectedToast && (
        <div className="mb-4 left-6 z-50 bg-red-600 text-white text-xl px-6 py-3 rounded-lg shadow-lg">
          Request rejected
        </div>
      )}
      <ul>
        {pendingRequests?.length > 0 ? (
          pendingRequests?.map((pending) => (
            <RequestCard
              key={pending.id}
              requestObj={pending}
              onAccept={handleAccept}
              onReject={handleReject}
            />
          ))
        ) : (
          <p> No requests for approval</p>
        )}
      </ul>

      <h2 className="text-3xl font-semibold text-slate-500 mt-8 mb-6">
        Approved Requests
      </h2>

      <ul>
        {approvedRequests?.length > 0 ? (
          approvedRequests?.map((approved) => (
            <RequestCard key={approved.id} requestObj={approved} />
          ))
        ) : (
          <p> No requests approved</p>
        )}
      </ul>
    </div>
  );
};

export default PendingRequests;
