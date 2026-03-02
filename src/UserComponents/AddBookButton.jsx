const AddBookButton = ({ onClick }) => (
  <button
    className="w-full px-3 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-800 transition-colors"
    onClick={onClick}
  >
    Add Book
  </button>
);
export default AddBookButton;
