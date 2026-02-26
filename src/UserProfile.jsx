import React from "react";
import { Routes, Route } from "react-router-dom";
import MyBooks from "./MyBooks";
import RequestedBooks from "./RequestedBooks";
import PendingRequests from "./PendingRequests";

const UserProfile = ({ user }) => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 mt-8">
        <h2 className="text-3xl font-semibold text-slate-500 mb-2">
          My Profile
        </h2>
       <p className="text-slate-300">Profile Details</p>
        <p>Username: { user?.username }</p>
        <p>email: { user?.email }</p>

        <p className="text-slate-300">Manage your books and exchange requests</p>
      </div>


      <Routes>
        <Route path="mybooks" element={<MyBooks user={user}/>} />
        <Route path="requestedbooks" element={<RequestedBooks user={user} />} />
        <Route path="pendingrequests" element={<PendingRequests user={user} />} />
      </Routes>
    </div>
  );
};
export default UserProfile;
