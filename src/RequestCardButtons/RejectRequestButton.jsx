const RejectRequestButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
  >
    Reject
  </button>
);
export default RejectRequestButton;
