export const deleteBook = async (
  bookId,
  setCurrentUser,
  setShowBookDeletedToast,
) => {
  fetch(`/api/books/${bookId}`, {
    method: "DELETE",
  })
    .then((r) => {
      console.log("response status:", r.status);
      return r.json();
    })
    .then(() => {
      setCurrentUser((prevUser) => ({
        ...prevUser,
        book_copies: (prevUser.book_copies || []).filter(
          (book) => book.id !== bookId,
        ),
      }));
      setShowBookDeletedToast(true);
    });
};
