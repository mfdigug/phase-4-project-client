export const addBook = async (newBook, setBooks, setCurrentUser) => {
  try {
    const response = await fetch("/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    setCurrentUser((prevUser) => ({
      ...prevUser,
      book_copies: [...(prevUser.book_copies || []), data],
    }));

    setBooks((prevBooks) => [...prevBooks, data]);

    return data;
  } catch (error) {
    console.error("Error adding book:", error);
  }
};
