const RequestExchangeButton = ({ onClick }) => (
  <button
    className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    onClick={onClick}
  >
    Request Exchange
  </button>
);

export default RequestExchangeButton;
