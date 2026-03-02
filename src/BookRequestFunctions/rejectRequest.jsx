export const rejectRequest = async (requestObj) => {
  try {
    const response = await fetch(`/api/book_requests/${requestObj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "rejected" }),
    });

    const rejectedRequest = await response.json();
    console.log("rejected request:", rejectedRequest);

    if (!response.ok) {
      throw new Error("Error rejecting request");
    }
    //Update UI
    // setCurrentUser((prevUser) => ({
    //   ...prevUser,
    //   book_requests: prevUser.book_requests.filter(
    //     (request) => request.id !== requestObj.id,
    //   ),
    // }));

    // setShowRequestDeletedToast(true);
  } catch (err) {
    console.error("Failed to reject request:", err);
  }
};
