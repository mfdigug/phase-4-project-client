export const requestBook = async (
  bookId,
  currentUser,
  setBooks,
  setCurrentUser,
  setShowRequestToast,
) => {
  if (!currentUser?.id) return;

  try {
    const response = await fetch("/api/book_requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        book_copy_id: bookId,
        requester_id: currentUser.id,
      }),
    });

    if (!response.ok) {
      // if backend returns error status, update this to capture it.
      throw new Error("Error creating request");
    }
    const newRequest = await response.json();
    // update UI
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
    setCurrentUser((prevUser) => ({
      ...prevUser,
      book_requests: [...(prevUser.book_requests || []), newRequest],
    }));

    setShowRequestToast(true);
  } catch (err) {
    console.error("Failed to create request:", err);
  }
};
