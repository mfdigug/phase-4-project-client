import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { UserContext } from "../App";
import { useBooks } from "../hooks/useBooks";
import { useActionsContext } from "../ActionsContext";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const currentUser = useContext(UserContext);
  const { handleAddBook } = useActionsContext();
  const navigate = useNavigate();

  // options
  const genreOptions = [
    "Fiction",
    "Non-fiction",
    "Biography",
    "Fantasy",
    "Sci-Fi",
  ];
  const conditionOptions = ["New", "Good", "Fair", "Poor"];

  const formSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    author: yup.string().required("Author is required"),
    genre: yup.string().required("Genre is required"),
    condition: yup.string().required("Condition is required"),
    image: yup.string().url("Must be a valid URL"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      genre: "",
      condition: "",
      image: "",
    },
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) => {
      const newBook = {
        ...values,
        owner_id: currentUser.id,
        is_available: true,
      };
      handleAddBook(newBook);
      resetForm();
      navigate("/userprofile/mybooks");
    },
  });

  return (
    <div>
      <h1 className="text-3xl font-semibold text-slate-300 mb-6">
        Add a New Book
      </h1>
      {/* required fields: title, author, genre, condition, image_url, pass owner_id? */}
      <div className="max-w-md">
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
          <input
            id="title"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
            placeholder="Title"
            className="border p-2 rounded bg-slate-200 text-2xl text-slate-700"
          />
          <p style={{ color: "red" }}> {formik.errors.title}</p>

          <input
            id="author"
            name="author"
            onChange={formik.handleChange}
            value={formik.values.author}
            placeholder="Author"
            className="border p-2 rounded bg-slate-200 text-2xl text-slate-700"
          />
          <p style={{ color: "red" }}> {formik.errors.author}</p>

          <input
            id="image"
            name="image"
            onChange={formik.handleChange}
            value={formik.values.image}
            placeholder="Image URL"
            className="border p-2 rounded bg-slate-200 text-2xl text-slate-700"
          />
          <p style={{ color: "red" }}> {formik.errors.image}</p>

          <select
            id="genre"
            name="genre"
            onChange={formik.handleChange}
            value={formik.values.genre}
            className="border p-2 rounded bg-slate-200 text-2xl text-slate-700"
          >
            <option value="">Genre</option>
            {genreOptions.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          <p style={{ color: "red" }}> {formik.errors.condition}</p>

          <select
            id="condition"
            name="condition"
            onChange={formik.handleChange}
            value={formik.values.condition}
            className="border p-2 rounded bg-slate-200 text-2xl text-slate-700"
          >
            <option value="">What condition is your book in?</option>
            {conditionOptions.map((condition) => (
              <option key={condition} value={condition}>
                {condition}
              </option>
            ))}
          </select>
          <p style={{ color: "red" }}> {formik.errors.condition}</p>

          <button
            type="submit"
            className="bg-slate-600 text-2xl text-slate-300 py-2 rounded hover:bg-slate-500 transition-colors"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
