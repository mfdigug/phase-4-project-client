export const acceptRequest = async (
  requestObj,
  setPendingRequests,
  setApprovedRequests,
) => {
  try {
    const response = await fetch(`/api/book_requests/${requestObj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "approved" }),
    });

    if (!response.ok) {
      // if backend returns error status, update this to capture it.
      throw new Error("Error approving request");
    }

    const acceptedObject = await response.json();
    // update UI
    setPendingRequests((prev) =>
      prev.filter((approved) => approved.id !== requestObj.id),
    );

    setApprovedRequests((prev) => [...prev, acceptedObject]);
  } catch (err) {
    console.error("Failed to accept request:", err);
  }
};
