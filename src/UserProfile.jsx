import React from "react";
import { Routes, Route } from "react-router-dom";
import MyBooks from "./MyBooks";
import RequestedBooks from "./RequestedBooks";
import PendingRequests from "./PendingRequests";

const UserProfile = () => {
  return (
    <div>
      <h2>User Profile</h2>
      <Routes>
        <Route path="mybooks" element={<MyBooks />} />
        <Route path="requestedbooks" element={<RequestedBooks />} />
        <Route path="pendingrequests" element={<PendingRequests />} />
      </Routes>
    </div>
  );
};
export default UserProfile;
