export const deleteRequest = async (
  requestId,
  setCurrentUser,
  setShowRequestDeletedToast,
) => {
  try {
    const response = await fetch(`/api/book_requests/${requestId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Error deleting request");
    }
    //Update UI
    setCurrentUser((prevUser) => ({
      ...prevUser,
      book_requests: prevUser.book_requests.filter(
        (request) => request.id !== requestId,
      ),
    }));

    setShowRequestDeletedToast(true);
  } catch (err) {
    console.error("Failed to delete request:", err);
  }
};
