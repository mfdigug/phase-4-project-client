export const acceptRequest = async (requestObj) => {
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
    const acceptedResponse = await response.json();
    console.log("accepted request:", acceptedResponse);
    // update UI
    // setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
    // setCurrentUser((prevUser) => ({
    //   ...prevUser,
    //   book_requests: [...(prevUser.book_requests || []), newRequest],
    // }));

    // setShowRequestToast(true);
  } catch (err) {
    console.error("Failed to accept request:", err);
  }
};
