export const rejectRequest = async (
  requestObj,
  setPendingRequests,
  setShowRequestRejectedToast,
) => {
  try {
    const response = await fetch(`/api/book_requests/${requestObj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "rejected" }),
    });

    if (!response.ok) {
      throw new Error("Error rejecting request");
    }

    //Update UI
    setPendingRequests((prev) =>
      prev.filter((rejected) => rejected.id !== requestObj.id),
    );

    setShowRequestRejectedToast(true);
  } catch (err) {
    console.error("Failed to reject request:", err);
  }
};
