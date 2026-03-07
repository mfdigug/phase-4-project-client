export const addBook = async (newBook, setBooks, setCurrentUser) => {
  fetch("/api/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBook),
  })
    .then((r) => r.json())
    .then((data) => {
      setCurrentUser((prevUser) => ({
        ...prevUser,
        book_copies: [...prevUser.book_copies, data],
      }));
    });
};
