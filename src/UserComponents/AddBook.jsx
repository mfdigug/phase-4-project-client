import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { UserContext } from "../App";
import { useBooks } from "../hooks/useBooks";

const AddBook = () => {
  const currentUser = useContext(UserContext);
  const [refreshPage, setRefreshPage] = useState(false);
  const { addBook } = useBooks();

  const formSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      image: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      //   addBook(newBook);
      console.log(values);
    },
  });

  return (
    <div>
      <h1 className="text-3xl font-semibold text-slate-300 mb-6">
        Add a New Book
      </h1>
      {/* required fields: title, author, genre, condition, image_url, pass owner_id? */}
      <div className="max-w-md">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="title">Title</label>
          <br />
          <input
            id="title"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <p style={{ color: "red" }}> {formik.errors.title}</p>

          <label htmlFor="author">author</label>
          <br />
          <input
            id="author"
            name="author"
            onChange={formik.handleChange}
            value={formik.values.author}
          />
          <p style={{ color: "red" }}> {formik.errors.author}</p>

          <label htmlFor="title">image</label>
          <br />
          <input
            id="image"
            name="image"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
          <p style={{ color: "red" }}> {formik.errors.image}</p>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
