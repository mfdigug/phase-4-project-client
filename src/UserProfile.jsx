import { useContext } from "react";
import { UserContext } from "./App"
import { Routes, Route } from "react-router-dom";
import MyBooks from "./MyBooks";
import RequestedBooks from "./RequestedBooks";
import PendingRequests from "./PendingRequests";

const UserProfile = () => {

  const currentUser = useContext(UserContext)

  return (
    <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 mt-8">
            <h2 className="text-3xl font-semibold text-slate-500 mb-2">
            My Profile
            </h2>
            <p className="text-slate-300">Profile Details</p>
            <p>Username: { currentUser?.username }</p>
            <p>email: { currentUser?.email }</p>
            <p className="text-slate-300">Manage your books and exchange requests</p>

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
