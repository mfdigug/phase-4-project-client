import { useContext } from "react";
import { UserContext } from "./App";
import { Routes, Route } from "react-router-dom";
import MyBooks from "./MyBooks";
import RequestedBooks from "./RequestedBooks";
import PendingRequests from "./PendingRequests";

const UserProfile = () => {
  const currentUser = useContext(UserContext);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 mt-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
          <div>
            <h2 className="text-4xl font-semibold text-slate-500 mb-4">
              My Profile
            </h2>
            <p className="text-2xl font-semibold text-slate-300 mt-4 mb-8">
              Manage your books and exchange requests
            </p>
          </div>

          <div className="text-right">
            <p className="text-xl font-semibold text-slate-300 mb-2">
              Profile Details
            </p>
            <p>
              Username:{" "}
              <span className="font-medium mb-2">{currentUser?.username}</span>
            </p>
            <p>
              email: <span className="font-medium">{currentUser?.email}</span>
            </p>
          </div>
        </div>

        <Routes>
          <Route path="mybooks" element={<MyBooks />} />
          <Route path="requestedbooks" element={<RequestedBooks />} />
          <Route path="pendingrequests" element={<PendingRequests />} />
        </Routes>
      </div>
    </div>
  );
};
export default UserProfile;
