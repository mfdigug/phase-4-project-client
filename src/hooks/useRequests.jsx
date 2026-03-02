import { useState, useEffect } from "react";

export const useRequests = (currentUser) => {
  const [pendingRequests, setPendingRequests] = useState([]);
  const [approvedRequests, setApprovedRequests] = useState([]);

  useEffect(() => {
    if (!currentUser?.id) return;

    fetch(`/api/users/${currentUser.id}/pending_requests`)
      .then((r) => r.json())
      .then((data) => {
        setPendingRequests(
          data.filter((request) => request.status === "pending"),
        );
        setApprovedRequests(
          data.filter((request) => request.status === "approved"),
        );
      });
  }, [currentUser]);

  return {
    pendingRequests,
    approvedRequests,
    setPendingRequests,
    setApprovedRequests,
  };
};
