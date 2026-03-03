const DeleteBookButton = ({ onClick }) => (
  <button
    className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
    onClick={onClick}
  >
    Delete Book
  </button>
);
export default DeleteBookButton;
