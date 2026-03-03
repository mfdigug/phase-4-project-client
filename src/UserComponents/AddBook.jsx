import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { UserContext } from "../App";
import { useBooks } from "../hooks/useBooks";

const AddBook = () => {
  const currentUser = useContext(UserContext);
  const { addBook } = useBooks();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newBook = {
      title: formData.get("title"),
      author: formData.get("author"),
      genre: formData.get("genre"),
      condition: formData.get("condition"),
      image_url: formData.get("image_url"),
      owner_id: currentUser.id,
    };
    addBook(newBook);
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold text-slate-300 mb-6">
        Add a New Book
      </h1>
      {/* required fields: title, author, genre, condition, image_url, pass owner_id? */}
      <div onSubmit={handleSubmit}>
        <form>
          <input type="text" />
          <label>Title</label>

          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
