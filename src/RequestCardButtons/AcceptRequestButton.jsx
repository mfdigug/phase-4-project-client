const AcceptRequestButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
  >
    Accept
  </button>
);
export default AcceptRequestButton;
